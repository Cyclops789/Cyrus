const { MessageEmbed } = require('discord.js');
const { Color, Prefix } = require("../../config.js");
const fetch = require('node-fetch');

module.exports = {
	name: "banner",
	aliases: [],
	description: "to get someones banner!",
	example: `${Prefix}banner`,
	category: "info",
	run: async (client, message, args) => {
		const user = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]).catch(err => undefined);
		if (!user) return message.reply('You must mention someone to get thier banner').catch(console.error);
		const res = await (await (fetch(`https://cryptons.ga/api/v1/userbanner?id=${user.id}`))).json();

		if(res.url === "null") return message.reply(`<@${user.id}> doesnt have a banner`)

		const embed = new MessageEmbed()
			.setTitle(`${user.username}'s Banner`)
			.setImage(res.url)
			.setColor(Color)
		message.channel.send(embed);
	}
}