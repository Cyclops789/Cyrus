const Discord = require('discord.js');
const { Color, GuildCreate } = require('../../config')

module.exports = async (client) => {
client.on("guildCreate", guild => {
	const embed = new Discord.MessageEmbed()
		.setTitle("I'm added to a new server!")
		.setColor(Color)
		.setDescription(`I'm added to ${guild.name}, with ${guild.memberCount}\n\nTotal server: ${client.guilds.cache.size}\nTotal users: ${client.users.cache.size}`)
		.setTimestamp()
	const logChannel = client.channels.cache.get(GuildCreate)
	logChannel.send(embed)
})};