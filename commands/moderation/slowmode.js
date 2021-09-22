const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "slowmode",
  aliases: ["sm"],
  description: "Set the slowmode for the channel!",
  category: "Moderation",
  example: `${Prefix}slowmode <seconds>`,
run: async (client, message, args) => {
        let lockPermErr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**User Permission Error!**")
        .setDescription("**You don't have permission to Use this command! Require: MANAGE_CHANNELS**")
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_CHANNELS") ) return message.channel.send(lockPermErr);
        //
        
        let lockPermErrban = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Bot Permission Error!**")
        .setDescription("**I don't have permission to Ban someone! Require: MANAGE_CHANNELS**")

     if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(lockPermErrban)
     
        
        //

        if (!args[0])
    return message.channel.send(new MessageEmbed()
    .setColor(`${ Color }`)
    .setTitle(`__***You did not specify the time in seconds you wish to set this channel's slow mode too!***__`));

    if (isNaN(args[0])) return message.channel.send(new MessageEmbed()
    .setColor(`${ Color }`)
    .setTitle(`That is not a number!`));
    
    message.channel.setRateLimitPerUser(args[0]);
    return message.channel.send(new MessageEmbed()
    .setColor(`${ Color }`)
    .setTitle(
      `__***Set the slowmode of this channel to ${args[0]}***__`
    ));
  },
};