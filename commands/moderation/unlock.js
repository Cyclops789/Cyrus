const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "unlock",
  aliases: [],
  description: "unlock channel",
  category: "Moderation",
  example: `${Prefix}unlock`,
    
run: async (client, message, args) => {
        let lockPermErr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**User Permission Error!**")
        .setDescription("**You don't have permission to Use this command! Require: MANAGE_CHANNELS**")
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_CHANNELS") ) return message.channel.send(lockPermErr);
        
        let lockPermErrban = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Bot Permission Error!**")
        .setDescription("**I don't have permission to Unlock the chat! Require: MANAGE_CHANNELS**")

     if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(lockPermErrban)
     


        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                });
            });
        } catch (e) {
            console.log(e);
        }

        message.channel.send(new MessageEmbed()
    .setColor(`${ Color }`)
    .setTitle(`__***Channel unlocked!***__`));
    }
};