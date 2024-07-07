# PlanetScale-to-Slack

A project to connect PlanetScale database events to Slack notifications.

![PlanetScale to Slack](https://github.com/samlambert/requestspersecond.fyi/assets/1155781/60702007-0e78-4f0f-bf99-1653108c2c79)

## Setup

- Create a project on Vercel and deploy this repository
- Set up a [Slack App](https://api.slack.com/quickstart) with `chat:write` and `chat:write.customize` scopes
- [Configure webhooks](https://planetscale.com/docs/concepts/webhooks) for your PlanetScale database
- Set the following environment variables in Vercel:
  - `PLANETSCALE_WEBHOOK_SECRET`: The secret used to verify webhook requests
  - `SLACK_WEBHOOK_URL`: The URL of your Slack app
  - `SLACK_CHANNEL`: The name of the Slack channel to send messages to
- Profit

This version of the PlanetScale is the right size for a Slack app logo:

![PlanetScale Logo](https://github.com/samlambert/requestspersecond.fyi/assets/1155781/491e706f-b53a-4812-91b9-67128677ff53)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](https://choosealicense.com/licenses/mit/)