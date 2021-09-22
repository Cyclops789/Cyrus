const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
	name: "botinfo",
	category: "Info",
	aliases: ["bot", "info", "stats"],
	description: "Give the information of the bot",
	example: `${Prefix}botinfo`,

	run: async (client, message, args) => {
		let usersCount = 0;
		for (const guild of client.guilds.cache) {
			usersCount += (await guild[1].members.fetch()).size
		}

		let Days = Math.floor(client.uptime / 86400000);
		let Hours = Math.floor(client.uptime / 3600000) % 24;
		let Minutes = Math.floor(client.uptime / 60000) % 60;
		let Seconds = Math.floor(client.uptime / 1000) % 60;
		const RemoveUseless = (Duration) => {
			return Duration.replace("0 Day\n", "").replace("0 Hour\n", "").replace("0 Minute\n", "");
		}

		let Uptime = await RemoveUseless(`${Days}${Days > 1 ? "d" : "d"} ${Hours}${Hours > 1 ? "h" : "h"} ${Minutes}${Minutes > 1 ? "m" : "m"} ${Seconds}${Seconds > 1 ? "s" : "s"}`);

		const embed = new MessageEmbed()

			.setTitle(`Cyrus info:`)
			.addField(`Guild Count:`, `\`\`\`${client.guilds.cache.size} Servers\`\`\``, true)
			.addField(`User Count`, `\`\`\`${usersCount} Users\`\`\``, true)
			.addField(`Channel Count`, `\`\`\`${client.channels.cache.size} Channels\`\`\``, true)
			.addField("Ping", `\`\`\`Latency: ${Date.now() - message.createdTimestamp} ms\nWebSocket: ${Math.round(client.ws.ping)} ms\`\`\``)
			.addField(`Command Size`, `\`\`\`${client.commands.size} Commands\n${client.aliases.size} Aliases\`\`\``, true)
			.addField(`Uptime`, `\`\`\`${Uptime}\`\`\``, true)
			.addField(`Developer`, `\`\`\`${Prefix}dev for more information!\`\`\``, true)
			.setColor(Color)
			.setTimestamp()
		message.channel.send(embed)
	}
}