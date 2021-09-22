const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const fetch = require('node-fetch')
module.exports = {
  name: "userinfo",
  aliases: ["memberinfo", "whois"],
  description: "Show User Information!",
  example: `${Prefix}userinfo <Member>`,
  category: "info",
 run: async (client, message, args) => {
    let member =
      message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]) ||
      message.member;

    const statuses = {
        online: "<:online:881654787630850079> Online",
        idle: "<:idle:881651552971014154> Idle",
        dnd: "<:donotdisturb:881655738412433448> Do Not Disturb",
        offline: "<:offline:881656428178341918> Offline/Invisible"
    };

		const res = await (await (fetch(`https://cryptons.ga/api/v1/userbanner?id=${member.id}`))).json();

    const embed = new MessageEmbed()
      .setTitle(member.user.username + " Information!")
      .setColor(Color)
      .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
      .addField("Full Name:", member.user.tag, true)
      .addField("Mention:", `<@${member.id}>`, true)
      .addField("ID:", `${member.id}`)
			.addField("Status:", statuses[member.presence.status], true)
      .addField(`Avatar Url:`, `[Link](${member.user.displayAvatarURL({
					format: "webp",
					dynamic: true,
					size: 1024
				})})`)
			.addField(`Banner Url:`, `[Link](${res.url || "No banner"})`)
			.addField(
        `Roles Count:`,
        message.guild.members.cache.get(member.user.id).roles.cache.size ||
          "No Roles!")
      .addField("Joined Server At:", member.joinedAt.toDateString(), true)
      .addField("Joined Discord At:", member.user.createdAt.toDateString(), true)
    
    message.channel.send(embed);

  }
};