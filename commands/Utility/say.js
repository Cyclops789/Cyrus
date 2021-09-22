const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const lineReply = require('discord-reply');

module.exports = {
  name: "say",
  aliases: ["say"],
  description: "Say something",
  example: `${Prefix}say [what do you want the bot to say]`,
  category: "Utility",
  run: async (client, message, args) => {
   message.delete();
    
    let lockPermErr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**User Permission Error!**")
        .setDescription("**You don't have permission to Use this command! Require: MANAGE_MESSAGES**")
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES") ) return message.channel.send(lockPermErr);   
     if(!args[0]) return message.reply("What you want me to say?")
    
        let question = args.slice(0).join(" ");

    let embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setDescription(question)

    message.lineReplyNoMention(embed);
}
};