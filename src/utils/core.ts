import fs from 'fs';
import path from 'path';
import type { Interaction } from 'discord.js';

import type { Command, Event } from '../types';

export function getCommands() {
  const commandsPath = path.join(__dirname, '..', 'commands');
  return Promise.all(
    fs
      .readdirSync(commandsPath)
      .filter((f) => f.endsWith('.ts'))
      .map(async (f) => {
        const module = await import(path.join(commandsPath, f));
        return module.default as Command<Interaction>;
      })
  );
}

export function getEvents() {
  const eventsPath = path.join(__dirname, '..', 'events');
  return Promise.all(
    fs
      .readdirSync(eventsPath)
      .filter((f) => f.endsWith('.ts'))
      .map(async (f) => {
        const module = await import(path.join(eventsPath, f));
        return module.default as Event<any>;
      })
  );
}
