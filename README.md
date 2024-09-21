# 📝 discord-bot-template

A type-safe Discord.js v14 boilerplate built with [TypeScript](https://www.typescriptlang.org) and [Bun](https://bun.sh).

## Features

- Usage of Discord interactions (application/"slash" commands)
- Type-safe environment variable validation with [t3-env](https://env.t3.gg)
- Example `/ping` and `/purge` commands
- Command and event handlers
- [Biome](https://biomejs.dev) integration

## Contributions

Feel free to share your ideas, report issues, and help make discord-bot-template even better!

## Setup

Clone the project

```bash
git clone https://github.com/aelew/discord-bot-template.git
```

Go to the project directory

```bash
cd discord-bot-template
```

Install dependencies

```bash
bun i
```

Set environment variables

```
To run this project, you need to set the required environment variables.
Copy `.env.example` into a new file called `.env` and fill in the values.
```

Deploy application commands

```bash
bun run deploy
```

Start the bot

```bash
bun start
```

## Scripts

```bash
bun start # start the bot
bun format # format code
bun run deploy # deploy commands (run after adding/modifying command data)
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
