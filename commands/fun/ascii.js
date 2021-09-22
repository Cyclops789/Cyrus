const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);
const lineReply = require('discord-reply');

module.exports = {
  name: "ascii",
  aliases: [],
  description: "Ascii Art!",
  example: `${Prefix}ascii <Text>`,
  category: "fun",
  run: async (client, message, args) => {
    //Start
    
    let Content = args.join(" ");

    if (!Content) return message.channel.send(`Please give me text!`);

    let Result = await figletAsync(Content);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setDescription("```" + Result + "```")
      .setTimestamp();

    if (Content.length > 20)
      return message.channel.send(`Please make shorter! | limit : 20`);

    message.lineReplyNoMention(embed);

    //End
  }
};