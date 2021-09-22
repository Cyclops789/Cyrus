const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
	name: "clear",
	aliases: ["purge", "clearmsgs"],
	description: "Clear Your Messages!",
	example: `${Prefix}clear <Message Amount>`,
	category: "Moderation",
	run: async (client, message, args) => {
		message.delete();
		let lockPermErr = new Discord.MessageEmbed()
			.setColor(`${Color}`)
			.setTitle("**User Permission Error!**")
			.setDescription("**You don't have permission to Use this command! Require: MANAGE_MESSAGES**")

		if (!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES")) return message.channel.send(lockPermErr);


		let lockPermErrclear = new Discord.MessageEmbed()
			.setColor(`${Color}`)
			.setTitle("**Bot Permission Error!**")
			.setDescription("**I don't have permission to clear the chat! Require: MANAGE_MESSAGES**")

		if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(lockPermErrclear);
if (!args[0]) {
     return message.reply(`Please enter a amount between 1 to 100`)
 }
 let deleteAmount;
 if (parseInt(args[0]) > 100 ) {
     deleteAmount = 100;


 } else {

     if(isNaN(args[0])) return message.channel.send('Please enter a amount between 2 to 100')
    
     deleteAmount = parseInt(args[0]);
 }

let Reason = args.slice(1).join(" ") || "No reason provided!";

 message.channel.bulkDelete(deleteAmount, true).then(Message => {
			let embed = new Discord.MessageEmbed()
				.setColor(Color)
				.setTitle(`Messages Deleted!`)
				.addField(`Moderator`, `${message.author.tag}`)
				.addField(`Channel`, `#${message.channel.name} (${message.channel.id})`)
				.addField(`Deleted Messages`, `${deleteAmount}`)
				.addField(`Reason`, `${Reason}`)
				.setFooter(`Requested by ${message.author.username}`)
				.setTimestamp();
			return message.channel
				.send(embed)
				.then(msg => msg.delete({ timeout: 10000 }));
		});

	}
};