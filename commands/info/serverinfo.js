const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "serverinfo",
  aliases: ["serverinformation"],
  description: "Show Server Information!",
  example: `${Prefix}serverinfo`,
  category: "info",
  run: async (client, message, args) => {
    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

    const embed = new MessageEmbed()
      .setTitle(guild.name + " Information!")
      .setColor(Color)
      .setThumbnail(guild.iconURL({dynamic: true}))
      .addField(`Name:`, guild.name, true)
      .addField(`ID:`, `${guild.id}`, true)
      .addField(`Owner:`, `${guild.owner.user.tag}`, true)
      .addField(`Roles:`, Roles, true)
      .addField(`emojis:`, Emojis, true)
      .addField(`Members:`, Members, true)
      .addField(`Humans:`, Humans, true)
      .addField(`Bots:`, Bots)
      .addField(`Created At:`, guild.createdAt.toDateString())
      .setTimestamp();

    message.channel.send(embed);
  }
};