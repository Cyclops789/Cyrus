const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const lineReplyNoMention = require('discord-reply');


module.exports = {
  name: "randomnumber",
  aliases: ["rn"],
  category: "fun",
  description: "Get Random Number!",
  example: `${Prefix}randomnumber`,
  category: "fun",
  run: async (client, message, args) => {
    //Start
    let result = Math.floor(Math.random() * 101);

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Random Number Is`)
      .setDescription([result])
      .setFooter(`1 - 100`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};