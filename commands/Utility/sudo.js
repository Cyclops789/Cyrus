const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");


module.exports = {
  name: "sudo",
  description: "Makes a webhook to impersonate someone",
  example: `${Prefix}sudo <user> <message>`,
  category: "Utility",
  args: true,
  cooldown: 5,
  run: async (client, message, args) => {
    
    let lockPermErr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**User Permission Error!**")
        .setDescription("**You don't have permission to Use this command! Require: MANAGE_WEBHOOKS**")
        if (!message.channel.permissionsFor(message.member).has("MANAGE_WEBHOOKS") ) return message.channel.send(lockPermErr);
        
        let lockPermErrban = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Bot Permission Error!**")
        .setDescription("**I don't have permission to create Webhook! Require: MANAGE_WEBHOOKS**")

     if (!message.guild.me.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send(lockPermErrban)
     
    
    message.delete();
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("Please provide a user!");
    const webhook = await message.channel.createWebhook(user.displayName, {
      avatar: user.user.displayAvatarURL(),
      channel: message.channel.id
    });
    await webhook.send(args.slice(1).join(" ")).then(() => {
      webhook.delete();
    });
  }
};