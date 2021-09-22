const Schema = require('../../models/info')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { Color, Prefix } = require('../../config.js')

module.exports = {
  name: "info",
  description: "check someone's info or your info",
  example: `${Prefix}info @user`,
  aliases: ["myinfo"],
	category: "personal-info",
  run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    Schema.findOne({ User: user.id }, async(err, data) => {
      if(!data) return message.channel.send('This user doesnt have any info')
    const infoembed = new Discord.MessageEmbed()
    .setAuthor('Info', user.avatarURL())
    .addField('Name: ', data.Name)
    .addField('Bio: ', data.Bio)
    .addField('Age: ', data.Age)
    .addField('Gender: ', data.Gender)
    .addField('Birthday: ', data.Birthday)
    .addField('Favorite Anime: ', data.Favanime)
    .setColor(Color)
    .setFooter('if you see an info named "undefined", means that user still doesnt set his/her selected Info')
		
    message.channel.send(infoembed)
    })
  }
}