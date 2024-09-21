import {
  type ChatInputCommandInteraction,
  SlashCommandBuilder
} from 'discord.js';

import type { Command } from '../types';

const pingCommand: Command<ChatInputCommandInteraction> = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Responds with the bot's latency."),
  execute: async (interaction) => {
    await interaction.reply(
      `Pong! My ping is **${interaction.client.ws.ping}ms**.`
    );
  }
};

export default pingCommand;
