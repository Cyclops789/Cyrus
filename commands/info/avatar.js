const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
	name: "avatar",
	aliases: ["icon", "pfp"],
	description: "Show member Avatar!",
	example: `${Prefix}avatar <Mention Member>`,
	category: "info",
	run: async (client, message, args) => {
		//Start
		let Member =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]) ||
			message.member;
			
		let embed = new Discord.MessageEmbed()
			.setColor(Color)
			.addField(
				`**${Member.user.username}** avatar`,
				`[png](${Member.user.displayAvatarURL({
					format: "png",
					dynamic: true,
					size: 1024
				})}) | [jpg](${Member.user.displayAvatarURL({
					format: "jpg",
					dynamic: true,
					size: 1024
				})}) | [webp](${Member.user.displayAvatarURL({
					format: "webp",
					dynamic: true,
					size: 1024
				})})`
			)
			.setImage(Member.user.displayAvatarURL({ size: 1024, dynamic: true }))
			.setTimestamp();

		message.channel.send(embed);

		//End
	}
};