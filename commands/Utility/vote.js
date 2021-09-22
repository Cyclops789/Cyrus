const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
	name: 'vote',
	description: 'Make vote',
	aliases: ["v"],
	cooldown: 3,
  category: "Utility",
  example: `${Prefix}vote <Text>`,
	run: async (client, message, args, reaction) => {
	  let lockPermErr = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle("**User Permission Error!**")
        .setDescription("**You don't have permission to Use this command! Require: MANAGE_MESSAGES**")
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") ) return message.channel.send(lockPermErr);
		if (!args[0]) return message.channel.send(`example: __***${Prefix}vote something***__`);
		const { guild } = message;
		const { name } = guild;
		const icon = guild.iconURL();
		const embed = new MessageEmbed()
			.setTitle(name)
			.setDescription(args.join(' '))
			.setColor(Color)
			.setThumbnail(icon)
			.setFooter(`by ${message.author.username}`)
		message.delete();
		message.channel.send(embed).then(msg => {
			msg.react('✔️');


			msg.react('✖️');

		}).catch(err => message.channel.send(`**${err}**, require: **ADD_REACTIONS**`))
	}
};