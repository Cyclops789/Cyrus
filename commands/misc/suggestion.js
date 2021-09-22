  const Discord = require('discord.js');
  const { MessageEmbed } = require("discord.js");
  const { Color, Prefix, Suggestion } = require("../../config.js");

  module.exports = {
    name: "suggestion",
    aliases: ["suggest"],
    category: "Misc",
    description: "To send an idea or anything to us!!",
    example: `${Prefix}suggestion add slap command`,

    run: async (client, message, args) => {
			
			const Channel = client.channels.cache.get(Suggestion);
      
			let lockPermErr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Suggestion**")
        .setDescription(`Please write a suggestion so that we can look through thanks **\`${Prefix}suggest [Your suggestion]\`**`)
      
      
        if(!args[0])
        return message.reply(lockPermErr)

        let question = args.slice(0).join(" ");

        let report = message.content.slice(message.content.indexOf(args[0]), message.content.length);
        const embed = new MessageEmbed()
        .setTitle('__suggest__')
        .setDescription(question)
        .addField('User', `\`${message.member.user.tag}\` | \`${message.member.id}\``)
        .addField('Server', `\`${message.guild.name}\` | \`${message.guild.id}\``)
        .setTimestamp()
        .setColor(Color);

        Channel.send(embed)
      let lockPermErrr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Suggestion**")
        .setDescription(`Your suggestion has been sent it successfully`)


        await message.channel.send(lockPermErrr)
    }
  };
