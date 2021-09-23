const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix, DevId } = require("../../config.js");
const rgx = /^(?:<@!?)?(\d+)>?$/;
module.exports = {
  name: "leaveserver",
  aliases: [],
  description: "",
  example: ``,
  category: "dev",
  run: async (client, message, args) => {
       let lockPermErr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Error!**")
        .setDescription("**This command is only available for the owner!**")

    if(message.author.id !== DevId) return message.channel.send(lockPermErr)

    const guildId = args[0] || message.guild;
    if (!rgx.test(guildId))
    return;

    const guild = message.client.guilds.cache.get(guildId);

		await message.channel.send(`Left the guild **\`${guild.name}\`** with **\`${guild.memberCount}\`** Users`);

    if (!guild) return;
    await guild.leave();
	}
}
