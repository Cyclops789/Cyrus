const Discord = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "profile",
	aliases: [],
	category: "info",
	example: `${Prefix}info`,
	description: "",
	run: async (client, message, args) => {
		const embed = new MessageEmbed()
		.setColor(Color)
		.addField("Commands", `\`\`\`info, setage, setbio, setbirthday, setfavanime, setgender, setname\`\`\``)
		.setFooter(`Do you have any idea? let us know !, ${Prefix}suggestion`)
		message.channel.send(embed)
  }
}