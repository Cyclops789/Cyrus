const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "lock",
  aliases: [],
  description: "lock channel",
  category: "Moderation",
  example: `${Prefix}lock`,
    
run: async (client, message, args) => {
        let lockPermErr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**User Permission Error!**")
        .setDescription("**You don't have permission to Use this command! Require: MANAGE_ROLES**")
        
        if(!message.channel.permissionsFor(message.member).has("MANAGE_ROLES") ) return message.channel.send(lockPermErr);
        //
        
        let lockPermErrban = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Bot Permission Error!**")
        .setDescription("**I don't have permission to lock the chat! Require: MANAGE_ROLES**")

     if (!message.guild.me.hasPermission("MANAGE_GUILD")) return message.channel.send(lockPermErrban)
     

//
        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e);
        }

        message.channel.send(new MessageEmbed()
    .setColor(`${ Color }`)
    .setTitle(`__***Channel Locked!***__`));
    }
};