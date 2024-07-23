# PlanetScale-to-Slack

A app to connect PlanetScale database events to Slack notifications.

![PlanetScale to Slack](https://github.com/samlambert/planetscale-to-slack/assets/1155781/478d465f-0ca4-4312-a6e3-944bae6612ae)

## Setup

- Create a project on Vercel and deploy this repository
- Set up a [Slack App](https://api.slack.com/quickstart) with `chat:write` and `chat:write.customize` scopes
- [Configure webhooks](https://planetscale.com/docs/concepts/webhooks) for your PlanetScale database
- Set the following environment variables in Vercel:
  - `PLANETSCALE_WEBHOOK_SECRET`: The secret used to verify webhook requests
  - `SLACK_BOT_TOKEN`: The URL of your Slack app
  - `SLACK_CHANNEL`: The name of the Slack channel to send messages to
- To test your app is working you can send a [test webhook](https://planetscale.com/docs/concepts/webhooks#setting-up-a-webhook-in-planetscale) from PlanetScale and a message will be sent to Slack
- Profit

This version of the PlanetScale is the right size for a Slack app logo:

![PlanetScale Logo](misc/PlanetScale_logo.png)

## Contributing

Contributions are welcome. Feel free to submit a Pull Request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
