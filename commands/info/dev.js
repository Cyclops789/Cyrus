const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix, DevId } = require("../../config.js");

module.exports = {
  name: "dev",
  aliases: ["devloper", "owner"],
  description: "Information about the Owner",
  example: `${Prefix}owner`,
  category: "info",
  run: async (client, message, args) => {
      
			let devimg = client.users.cache.get(DevId).displayAvatarURL();

			const embed = new MessageEmbed()
      .setColor(Color)
      .addField(`Name` , `Cyclops#1952`)
			.addField(`ID` , `604034501210800128`)
			.addField(`Mention` , `<@${DevId}>`)
      .addField(`Gamebanana` , `[Click Here](https://gamebanana.com/members/1735461)`)
      .addField(`Steam` , `[Click Here](https://steamcommunity.com/id/_-Cyclops-_)`)
      .addField(`YouTube` , `[Click Here](https://www.youtube.com/channel/UCvlLGFeYQTnhTKjFm9CxzBQ)`)
			.setThumbnail(devimg)
      message.channel.send(embed)
  }
}