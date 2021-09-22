const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const lineReply = require('discord-reply');

module.exports = {
  name: "rate",
  aliases: [],
  description: "Bot Rate Your Given Thing!",
  example: `${Prefix}rate <Text>`,
  category: "fun",
  run: async (client, message, args) => {
    //Start
    let Content = args.join(" ");
		
    if (!Content)
      return message.lineReplyNoMention(`Please Give Me Something To Rate!`);

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle(`I Rate`)
      .setDescription(`${Math.floor(Math.random() * 11)}/10 To ${Content}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.lineReplyNoMention(embed);

    //End
  }
};