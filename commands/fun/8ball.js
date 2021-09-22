const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const lineReply = require('discord-reply');


module.exports = {
  name: "8ball",
  aliases: [],
  description: "",
  example: `${Prefix}8ball should i go to sleep?`,
  category: "fun",
  run: async (client, message, args) => {
if(!args[1]) return message.reply("Please ask a full question! Minimum two words.");
    let replies = [
      "No.",
      "Maybe",
      "Actually no",
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful.",
      "My dev says yes lol"
  ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embed = new Discord.MessageEmbed()
    //.setAuthor(message.author.tag)
    .setColor(`${Color}`)
    .addField("Question", question)
    .addField("Answer", replies[result])
    .setThumbnail(`https://c.tenor.com/TUAmdkSnr4cAAAAM/naruto-smile.gif`);

    message.lineReplyNoMention(embed);
}
};