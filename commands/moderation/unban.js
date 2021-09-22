const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "unban",
  aliases: [],
  description: "Unban A Member!",
  example: `${Prefix}unban <Member ID>`,
  category: "Moderation",
  run: async (client, message, args) => {
    //Start
let lockPermErr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**User Permission Error!**")
        .setDescription("**You don't have permission to Use this command! Require: BAN_MEMBERS**")
        
        if(!message.channel.permissionsFor(message.member).has("BAN_MEMBERS") ) return message.channel.send(lockPermErr);
       
        let lockPermErrban = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Bot Permission Error!**")
        .setDescription("**I don't have permission to Unban someone! Require: BAN_MEMBERS**")

     if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(lockPermErrban)
     

    if (!args[0])
      return message.channel.send(
        `Please give me member ID that you want to Unban!`
      );

    if (isNaN(args[0])) return message.channel.send(`Please give me valid ID!`);

    if (args[0] === message.author.id)
      return message.channel.send(`You are already unban lol`);

    if (args[0] === message.guild.owner.user.id)
      return message.channel.send(`server owner is Unban!, wait what?`);

    if (args[0] === client.user.id)
      return message.channel.send(`ok`);

    let FetchBan = await message.guild.fetchBans();

    let Member;
    Member =
      FetchBan.find(
        b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      FetchBan.get(args[0]) ||
      FetchBan.find(
        bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase()
      );

    if (!Member)
      return message.channel.send(
        "Please Give Valid Member ID Or Member Is Not Banned!"
      );

    let Reason = args.slice(1).join(" ") || "No Reason Provided!";

    try {
      message.guild.members.unban(Member.user.id, Reason);
    } catch (error) {
      return message.channel.send(
        `I Can't Unban That Member Maybe Member Is Not Banned Or Some Error!`
      );
    }

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Unbanned!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}}`)
      .addField(`Unbanned Member`, `${Member.user.tag} (${Member.user.id}`)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    return message.channel.send(embed);

    //End
  }
};