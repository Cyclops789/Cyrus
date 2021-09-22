const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const db = require('quick.db')

module.exports = {
  name: "ban",
  aliases: [],
  description: "Ban A Member!",
  example: `${Prefix}ban <Mention Member>`,
  category: "Moderation",
  run: async (client, message, args) => {

    let lockPermErr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**User Permission Error!**")
        .setDescription("**You don't have permission to Use this command! Require: BAN_MEMBERS**")

    if(!message.channel.permissionsFor(message.member).has("BAN_MEMBERS") ) return message.channel.send(lockPermErr);

     let lockPermErrban = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Bot Permission Error!**")
        .setDescription("**I don't have permission to Ban someone! Require: BAN_MEMBERS**")

     if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(lockPermErrban)
  

let banmember = message.mentions.members.first() || message.guild.members.cache.get(args[0] ? args[0] : ``);

if (!banmember)
return message.channel.send(new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Error!**")
        .setDescription("__***Please Mention A Member That You Want To Ban!***__")
)

		let Member = message.mentions.members.first()
		
		if (!Member) return message.channel.send(
       `Please Mention A Member That You Want To Ban!`);
    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Please mention a valid member!`);

    if (Member.id === message.author.id)
      return message.channel.send(`You can't ban your self!`);

    if (Member.id === client.user.id)
      return message.channel.send(`You cant ban me!`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`You Can't ban owner of server!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    try {
      console.log(`member is going to get ban!`);
      setTimeout(function() {
        User.ban({ reason: `${Reason || "No Reason Provided!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Member Banned!`)
        .addField(`Moderator`, `${message.author.tag}`)
        .addField(`Banned Member`, `${Member} (${Member.id})`)
        .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `You have been banned from **${message.guild.name}** For reason: ${Reason ||
            "No Reason Provided!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Just Got Banned From ${
          message.guild.name
        } For ${Reason || "No Reason Provided!"}`
      );
    } catch (error) {
      return message.channel
        .send(
          `I Can't Ban That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!`
        )
        .then(() => console.log(error));
    }
  }
};
