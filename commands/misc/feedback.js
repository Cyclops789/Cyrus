  const Discord = require('discord.js');
  const { MessageEmbed } = require("discord.js");
  const { Color, Prefix, Feedback } = require("../../config.js");

  module.exports = {
    name: "feedback",
    aliases: [],
    category: "Misc",
    description: "Use this command send a feedback to my dev",
    example: `${Prefix}feedback Bot is really great!`,

    run: async (client, message, args) => {

        const Channel = client.channels.cache.get(Feedback);


      let lockPermErr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Feedback**")
        .setDescription(`Please write a feedback so that we can look through thanks **\`${Prefix}feedback [Your cool feedback]\`**`)


        if(!args[0])
        return message.reply(lockPermErr)

        let question = args.slice(0).join(" ");

        let report = message.content.slice(message.content.indexOf(args[0]), message.content.length);
        const embed = new MessageEmbed()
        .setTitle('__feedback__')
        .setDescription(question)
        .addField('User', `\`${message.member.user.tag}\` | \`${message.member.id}\``)
        .addField('Server', `\`${message.guild.name}\` | \`${message.guild.id}\``)
        .setTimestamp()
        .setColor(Color);

        Channel.send(embed)


      let lockPermErrr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Feedback**")
        .setDescription(`Your feedback has been sent it successfully`)

        await message.channel.send(lockPermErrr)
    }
  };
