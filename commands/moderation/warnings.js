const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const schema = require('../../models/profileSchema')

module.exports = {
	name: "warnings",
	aliases: [],
	description: "Show User Warnings!",
	example: `${Prefix}warnings <Mention User>`,
	category: "Moderation",
	run: async (Client, message, args) => {
		//Start
		let lockPermErr = new Discord.MessageEmbed()
			.setColor(Color)
			.setTitle("**User Permission Error!**")
			.setDescription("**You don't have permission to Use this command! Require: KICK_MEMBERS**")

		if (!message.channel.permissionsFor(message.member).has("KICK_MEMBERS")) return message.channel.send(lockPermErr);

		let user = message.mentions.users.first()
    if(!user) return message.channel.send("Please mention a user to show their warns!")

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
		 if(data.warns == 3) {
      return message.channel.send(`${user} already reached their limit with 3 warnings, you may use **${Prefix}kick** ${user} or **${Prefix}ban** ${user} to ban or kick the user!`)
    }
		let embed = new MessageEmbed()
			.setColor(Color)
			.setTitle(`Member Warnings!`)
			.setDescription(`${user} has ${data.warns} Warnings!`)
			.setTimestamp();

		message.channel.send(embed)

		//End
	}
};