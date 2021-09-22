const Discord = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const { MessageEmbed } = require("discord.js")
const schema = require('../../models/afkSchema')

module.exports = {
	name: "afk",
	aliases: [],
	category: "Utility",
	example: `${Prefix}afk <reason>`,
	description: "",
	run: async (client, message, args) => {
		let data;
    try {
        data = await schema.findOne({
            userId: message.author.id,
            guildId: message.guild.id,
        })
        if(!data) {
            data = await schema.create({
                userId: message.author.id,
                guildId: message.guild.id,
            })
        }
    } catch(e) {
        console.log(e)
    }

		let Member =
      message.guild.members.cache.get(args[0]) ||
      message.member;

		await Member.setNickname(`[AFK] ${Member.user.username}`).catch(err => {
			Member.send(`I cant change your nickname because your permissions is higher than me, or i dont have **CHANGE_NICKNAMES** permission to change it.`).then(msg => msg.delete({
			timeout: 15000
		}));
		});
    data.AFK = true
    data.AFK_Reason = args.join(" ")
    await data.save()
		message.channel.send(`You are now afk for \`${data.AFK_Reason}\``)
	}
}