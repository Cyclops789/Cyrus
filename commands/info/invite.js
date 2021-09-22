const Discord = require("discord.js");
const { Prefix, InvLink, Website, Topgg, Discordlist, Color, Status } = require("../../config.js");
const { MessageButton } = require('discord-buttons');
const lineReply = require('discord-reply');

module.exports = {
  name: "invite",
  aliases: ["add"],
  description: "Gives you an invite",
  example: `${Prefix}invite`,
  category: "info",
  run: async (client, message, args) => {

    let invLink = new MessageButton()
      .setStyle('url')
      .setLabel('Invite me')
      .setURL(`${InvLink}`)

    let website = new MessageButton()
      .setStyle('url')
      .setLabel('My website')
      .setURL(`${Website}`)
    
    let topgg = new MessageButton()
      .setStyle('url')
      .setLabel('Top.gg')
      .setURL(`${Topgg}`)

		let discordlist = new MessageButton()
      .setStyle('url')
  		.setLabel('Discordlist.space')
      .setURL(`${Discordlist}`)

		let status = new MessageButton()
			.setStyle('url')
			.setLabel('Status')
			.setURL(`${Status}`)

		const embed = new Discord.MessageEmbed()
			.setColor(Color)
			.addField("Links", 'What a nice bot')

    message.channel.send(embed, {
      buttons: [invLink, website, topgg, discordlist, status]
    })
  }
}