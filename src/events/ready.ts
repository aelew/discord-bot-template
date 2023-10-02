import { Events } from 'discord.js';

import { Event } from '../types';

const readyEvent: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  runOnce: true,
  execute: async (client) => {
    console.log(`Bot ready! Logged in as ${client.user.tag}.`);
  }
};

export default readyEvent;
