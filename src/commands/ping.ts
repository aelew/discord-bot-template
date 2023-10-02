import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

import { Command } from '../types';

const pingCommand: Command<ChatInputCommandInteraction> = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
  execute: async (interaction) => {
    await interaction.reply(`${interaction.client.ws.ping}ms`);
  }
};

export default pingCommand;
