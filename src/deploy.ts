import { REST, Routes } from 'discord.js';

import { env } from './env';
import { getCommands } from './utils/core';

const commands = await getCommands();
const data = commands.map((command) => command.data.toJSON());

const rest = new REST({ version: '10' }).setToken(env.DISCORD_BOT_TOKEN);

console.log(
  `Deploying ${data.length} command${commands.length === 1 ? '' : 's'}...`
);

rest
  .put(Routes.applicationCommands(env.DISCORD_CLIENT_ID), { body: data })
  .then(() =>
    console.log(
      `Successfully deployed ${commands.length} command${
        commands.length === 1 ? '' : 's'
      }!`
    )
  )
  .catch(console.error);
