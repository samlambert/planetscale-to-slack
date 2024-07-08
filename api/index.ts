import express, { Request, Response } from "express";
import { WebClient } from '@slack/web-api';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const slackToken = process.env.SLACK_BOT_TOKEN;
const slackChannel = process.env.SLACK_CHANNEL_ID;
const webhookSecret = process.env.PLANETSCALE_WEBHOOK_SECRET;

const slack = new WebClient(slackToken);

async function sendSlackMessage(message: string) {
    if (!slackChannel) {
      throw new Error('SLACK_CHANNEL_ID is not defined');
    }
    await slack.chat.postMessage({
      channel: slackChannel,
      text: message,
      mrkdwn: true
    });
  }

app.get('/', (req: Request, res: Response) => {
  res.send('no thank you');
});

app.post('/webhook', async (req, res) => {
  const signature = req.headers['planetscale-signature'];

  if (!signature || signature !== webhookSecret) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const data = req.body;
    const event = data.event;

    switch (event) {
        case 'deploy_request.opened':
            await sendSlackMessage(`${data.resource.actor.display_name} opened <${data.resource.html_url}|${data.resource.branch}> against \`${data.database}/${data.resource.into_branch}\``);
        break;

        case 'deploy_request.queued':
            await sendSlackMessage(`${data.resource.actor.display_name} queued <${data.resource.html_url}|${data.resource.branch}>`);
        break;

        case 'deploy_request.in_progress':
            await sendSlackMessage(`${data.resource.actor.display_name} started <${data.resource.html_url}|${data.resource.branch}>`);
        break;

        case 'deploy_request.schema_applied':
            await sendSlackMessage(`${data.resource.actor.display_name} has deployed <${data.resource.html_url}|${data.resource.branch}> to \`${data.database}/${data.resource.into_branch}\``);
        break;

        case 'deploy_request.errored':
            await sendSlackMessage(`<${data.resource.html_url}|${data.resource.branch}> has errored`);
        break;
    
        case 'deploy_request.reverted':
            await sendSlackMessage(`${data.resource.actor.display_name} has reverted <${data.resource.html_url}|${data.resource.branch}>`);
        break;
    
        case 'deploy_request.closed':
            await sendSlackMessage(`${data.resource.actor.display_name} has closed <${data.resource.html_url}|${data.resource.branch}>`);
        break;

        case 'branch.anomaly':
          await sendSlackMessage(`:warning:  <https://app.planetscale.com/${data.organization}/${data.database}/${data.resource.parent_branch}/insights/anomalies | Anomaly detected> on \`${data.database}/${data.resource.parent_branch}\``);
        break;

        case 'webhook.test':
          await sendSlackMessage(`Webhook test recieved from: \`${data.organization}/${data.database}\``);
        break;

        default:
            console.log(`Received an unknown event type: ${event.type}`);
        break;
    }

    res.status(200).send('Webhook processed successfully');
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Error processing webhook');
  }
});

export default app;