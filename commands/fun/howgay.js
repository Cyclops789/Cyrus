const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const lineReply = require('discord-reply')

module.exports = {
  name: "howgay",
  aliases: [],
  description: "Show how Gay member is!",
  example: `${Prefix}howgay <Mention Member>`,
  category: "fun",
  run: async (client, message, args) => {
    //Start
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = Math.floor(Math.random() * 101);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`gay v2 Machine`)
      .setDescription(`${Member.user.username} is ${Result}% Gay 🏳️‍🌈`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.lineReplyNoMention(embed);

    //End
  }
};