const Discord = require('discord.js');
const { Color, GuildDelete } = require('../../config')

module.exports = async (client) => {
client.on("guildDelete", guild => {
	const embed = new Discord.MessageEmbed()
		.setTitle("I left a server")
		.setColor(Color)
		.setDescription(`I left ${guild.name}, that had ${guild.memberCount}members \nTotal server: ${client.guilds.cache.size}\nTotal users: ${client.users.cache.size}`)
		.setTimestamp()
	const logChannell = client.channels.cache.get(GuildDelete)
	logChannell.send(embed)
})};