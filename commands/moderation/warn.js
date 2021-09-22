const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const schema = require('../../models/profileSchema')

module.exports = {
	name: "warn",
	aliases: [],
	description: "Warn A User!",
	example: `${Prefix}warn <Mention User> | <Reason>`,
	category: "Moderation",
	run: async (client, message, args) => {
		let lockPermErr = new Discord.MessageEmbed()
			.setColor(Color)
			.setTitle("**User Permission Error!**")
			.setDescription("**You don't have permission to Use this command! Require: KICK_MEMBERS**")

		if (!message.channel.permissionsFor(message.member).has("KICK_MEMBERS")) return message.channel.send(lockPermErr);


		let user = message.mentions.users.first()
    if(!user) return message.channel.send("Please mention a user to warn!")

    let data;
    try {
        data = await schema.findOne({
            userID: user.id,
            serverID: message.guild.id
        })
        if(!data) {
            data = await schema.create({
                userID: user.id,
                serverID: message.guild.id
            })
        }
    } catch (error) {
        console.log(error)
    }

    data.warns += 1
    await data.save()
		
		let reason = args.slice(1).join(" ");

		const ddEmbed = new MessageEmbed()
			.setColor(Color)
      .setDescription(`**${user} has been warned by <@${message.author.id}> For ${reason || "No Reason"}, now he/she have a total of ${data.warns} warnings!**`)
			.setTimestamp();

		message.channel.send(ddEmbed).then(msg => msg.delete({
			timeout: 15000
		}));
	}
}
