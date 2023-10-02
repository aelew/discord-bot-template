import { Events } from 'discord.js';

import { Event } from '../types';

const interactionCreateEvent: Event<Events.InteractionCreate> = {
  name: Events.InteractionCreate,
  execute: async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
      console.error('No matching command found.');
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: 'An error occurred while executing your command.',
        ephemeral: true
      });
    }
  }
};

export default interactionCreateEvent;
