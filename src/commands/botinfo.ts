import { ChatInputCommandInteraction, SlashCommandBuilder, version, EmbedBuilder } from "discord.js";
import os from 'os';

import { Command } from '../types';

const osInfo = {
    name: os.type(),
    architecture: os.arch(),
    platform: os.platform()
};

const botinfoCommand: Command<ChatInputCommandInteraction> = {
    data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription("Responds With Bot's Information."),
    execute: async (interaction) => {

        let Days = Math.floor(interaction.client.uptime / 86400000);
        let Hours = Math.floor(interaction.client.uptime / 3600000) % 24;
        let Minutes = Math.floor(interaction.client.uptime / 60000) % 60;
        let Seconds = Math.floor(interaction.client.uptime / 1000) % 60;
        const RemoveUseless = (Duration) => {
            return Duration.replace("0 Day\n", "").replace("0 Hour\n", "").replace("0 Minute\n", "");
        }

        let upTime = await RemoveUseless(`${Days}${Days > 1 ? "d" : "days"} ${Hours}${Hours > 1 ? "h" : "hrs"} ${Minutes}${Minutes > 1 ? "m" : "mins"} ${Seconds}${Seconds > 1 ? "s" : "sec"}`);

        const stats_embed = new EmbedBuilder()
            .setColor("Green")
            .setTitle(`**Information**`)
            .addFields(
                {
                    name: `OS`,
                    value: `\`\`\`${osInfo.name}\`\`\``,
                    inline: true
                },
                {
                    name: `Arch`,
                    value: `\`\`\`${osInfo.architecture}\`\`\``,
                    inline: true
                },
                {
                    name: `Platform`,
                    value: `\`\`\`${osInfo.platform}\`\`\``,
                    inline: true
                },
                {
                    name: `ServerCount`,
                    value: `\`\`\`${interaction.client.guilds.cache.size}\`\`\``,
                    inline: true
                },
                {
                    name: `UserCount`,
                    value: `\`\`\`${(interaction.client.guilds.cache.reduce((a, g) => a + g.memberCount, 0))-(interaction.client.guilds.cache.size)}\`\`\``,
                    inline: true
                },
                {
                    name: `Uptime`,
                    value: `\`\`\`${upTime}\`\`\``,
                    inline: true
                },
                {
                    name: `NodeJs Version`,
                    value: `\`\`\`${process.version}\`\`\``,
                    inline: true
                },
                {
                    name: `DiscordJs Version`,
                    value: `\`\`\`${version}\`\`\``,
                    inline: true
                },
                {
                    name: `Developers (Discord Tags)`,
                    value: `\`\`\`anmol420\`\`\``,
                    inline: true
                }
            )
            .setTimestamp()
        await interaction.reply({
            embeds: [stats_embed]
        });

    }
};

export default botinfoCommand;