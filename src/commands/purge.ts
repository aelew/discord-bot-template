import {
  type GuildTextBasedChannel,
  type ChatInputCommandInteraction,
  PermissionFlagsBits,
  SlashCommandBuilder,
  InteractionContextType
} from 'discord.js';

import type { Command } from '../types';

const purgeCommand: Command<ChatInputCommandInteraction> = {
  data: new SlashCommandBuilder()
    .setName('purge')
    .setDescription('Purges messages from the channel.')
    .setContexts(InteractionContextType.Guild)
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addIntegerOption((option) =>
      option
        .setName('amount')
        .setDescription('The number of messages to remove.')
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(100)
    ),
  execute: async (interaction) => {
    if (!interaction.channel?.isTextBased) {
      await interaction.reply(
        'This command can only be used in text channels.'
      );
      return;
    }

    const amount = interaction.options.getInteger('amount', true);
    const channel = interaction.channel as GuildTextBasedChannel;

    await channel.bulkDelete(amount, true);
    await interaction.reply(
      `Purged **${amount}** message${amount === 1 ? '' : 's'}.`
    );
  }
};

export default purgeCommand;
