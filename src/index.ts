import { Client, Collection, GatewayIntentBits } from 'discord.js';

import { env } from './env';
import { getCommands, getEvents } from './utils/core';

export const client = new Client({
  /**
   * If your bot requires certain intents, you can specify them here.
   * @see https://discordjs.guide/popular-topics/intents.html
   */
  intents: [
    GatewayIntentBits.Guilds // For our example `/purge` command
  ]
});

client.commands = new Collection();

const commands = await getCommands();
commands.forEach((command) => client.commands.set(command.data.name, command));

const events = await getEvents();
events.forEach((event) => {
  if (event.runOnce) {
    client.once(event.name, event.execute);
  } else {
    client.on(event.name, event.execute);
  }
});

client.login(env.DISCORD_BOT_TOKEN);
