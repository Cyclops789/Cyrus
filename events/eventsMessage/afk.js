const AFKS = require("../../models/afkSchema")
module.exports = async (client) => {
client.on('message', async message => {
	let data2;
	try {
		data2 = await AFKS.findOne({
			userId: message.author.id,
			guildId: message.guild.id
		})
		if (!data2) {
			data2 = await AFKS.create({
				userId: message.author.id,
				guildId: message.guild.id
			})
		}
	} catch (error) {
		console.log(error)
	}

	if (data2.AFK === true) {
		data2.AFK_Reason = null
		data2.AFK = false
		message.channel.send(`Welcome again ${message.member.user.username}, I removed your afk!`)
		await message.member.setNickname(`${message.member.user.username}`).catch(err => console.log(err));
		await data2.save()
	}
	if (message.mentions.members.first()) {
		let data3;
		try {
			data3 = await AFKS.findOne({
				userId: message.mentions.members.first().id,
				guildId: message.guild.id
			})
			if (!data3) {
				data3 = await AFKS.create({
					userId: message.mentions.members.first().id,
					guildId: message.guild.id
				})
			}
		} catch (error) {
			console.log(error)
		}

		if (data3.AFK == true) {
			message.channel.send(` Yo!! **${message.mentions.members.first().user.tag}** is AFK For: \`${data3.AFK_Reason || "No Reason"}\``)
		}
	}
})};