const Discord = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const { MessageEmbed } = require("discord.js");

let modules = ['fun', 'info', 'moderation', 'images', 'misc', 'Utility', 'anime', 'personal-info', 'dev'];

module.exports = {
	name: "membercount",
	aliases: [],
	category: "info",
	example: `${Prefix}membercount`,
	description: "",
	run: async (client, message, args) => {
		const guild = message.guild;
		const count = guild.memberCount;
			message.channel.send(`Members: ${count}`);
	}
}