const { MessageButton } = require('discord-buttons');
const { Prefix, Color, InvLink, Website, GuildDelete, GuildCreate, ChatBot } = require('../../config.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports = async (client) => {
client.on('message', async message => {
	if (message.channel.type === 'dm') return;
	if (message.author.bot) return;
	if (!message.guild) return;
	if (!message.member)
		message.member = await message.guild.fetchMember(message);

	let invLink = new MessageButton()
		.setStyle('url')
		.setLabel('Invite me')
		.setURL(`${InvLink}`)

	let website = new MessageButton()
		.setStyle('url')
		.setLabel('My website')
		.setURL(`${Website}`)

	let whenping = new Discord.MessageEmbed()
		.setColor(Color)
		.setTitle('Thanks for using **Cyrus**')
		.setDescription(`Prefix is **${Prefix}** to see my list of commands use **${Prefix}help**`)

	if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
		return message.channel.send(whenping, {
			buttons: [invLink, website]
		});
	}
	if (message.channel.id === ChatBot) {
		fetch.default(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
			.then(res => res.json())
			.then(data => {
				message.channel.send(data.response).catch(err => {
					message.channel.send(`${err}`)
					})
				})
			}
})};