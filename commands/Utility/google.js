const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const lineReply = require('discord-reply');

module.exports = {
  name: "google",
  aliases: ["search"],
  description: "To search for something in google",
  example: `${Prefix}google (Type this command to search for something using google)`,
  category: "Utility",
  run: async (client, message, args) => {
    
    if(!args[0]) return message.reply("What you want me to google?")

    let google = "https://letmegooglethat.com/?q="
    let question = args.join("+");

    let googleq = google + question;

    message.lineReplyNoMention(googleq);
  }
};