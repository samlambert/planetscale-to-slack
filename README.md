# PlanetScale-to-Slack

A app to connect PlanetScale database events to Slack notifications.

![PlanetScale to Slack](https://github.com/samlambert/planetscale-to-slack/assets/1155781/478d465f-0ca4-4312-a6e3-944bae6612ae)

## Vercel Setup

- Create a project on Vercel and deploy this repository
- Set up a [Slack App](https://api.slack.com/quickstart) with `chat:write` and `chat:write.customize` scopes
- [Configure webhooks](https://planetscale.com/docs/concepts/webhooks) for your PlanetScale database
- Set the following environment variables in Vercel:
  - `PLANETSCALE_WEBHOOK_SECRET`: The secret used to verify webhook requests
  - `SLACK_BOT_TOKEN`: The URL of your Slack app
  - `SLACK_CHANNEL`: The name of the Slack channel to send messages to
- To test your app is working you can send a [test webhook](https://planetscale.com/docs/concepts/webhooks#setting-up-a-webhook-in-planetscale) from PlanetScale and a message will be sent to Slack
- Profit

## Standalone Setup

- Spin up any cloud VM such as an Amazon EC2 instance or DigitalOcean droplet.
- Log in and download node, npm, npx, typescript, and any other requirements
- Choose a domain you own and set up the DNS to point to your instance/droplet (for example, `ps-webhooks.com`)
- Set up an HTTPS cert [using LetsEncrypt](https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca)
- Check out this repository
- From the repository root, create a `.env` file and set up the following variables:
  - `PLANETSCALE_WEBHOOK_SECRET`: The secret used to verify webhook requests
  - `SLACK_BOT_TOKEN`: The token for the slack bot of your application
  - `SLACK_CHANNEL`: The name of the Slack channel to send messages to
  - `MODE`: Set to `standalone`
  - `CREDENTIALS_PATH`: The path where the LetsEncrypt variables were saved into (possibly `/etc/letsencrypt/live/yourdomain/`)
- Start the server with `npx tsx api/index.ts`
- Set up a [Slack App](https://api.slack.com/quickstart) with `chat:write` and `chat:write.customize` scopes
- [Configure webhooks](https://planetscale.com/docs/concepts/webhooks) for your PlanetScale database
  - Set the webhook url to the domain you chose + '/webhook'. For example: `https://ps-webhooks.com/webhook`
- To test your app is working you can send a [test webhook](https://planetscale.com/docs/concepts/webhooks#setting-up-a-webhook-in-planetscale) from PlanetScale and a message will be sent to Slack
- Profit

This version of the PlanetScale is the right size for a Slack app logo:

![PlanetScale Logo](misc/PlanetScale_logo.png)

## Contributing

Contributions are welcome. Feel free to submit a Pull Request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
