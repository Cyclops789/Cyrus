  const Discord = require('discord.js');
  const { MessageEmbed } = require("discord.js");
  const { Color, Prefix, Report } = require("../../config.js");

  module.exports = {
    name: "report",
    aliases: [],
    category: "Misc",
    description: "Use this command to report us any bugs or issues.",
    example: `${Prefix}report pp commands is not working please fix thanks!!`,

    run: async (client, message, args) => {

        const Channel = client.channels.cache.get(Report);


      let lockPermErr = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Report**")
        .setDescription(`Please write a report so that we can look through thanks **\`${Prefix} report [Your report]\`**`)
        
        
        if(!args[0])
        return message.reply(lockPermErr)

        let question = args.slice(0).join(" ");

        let report = message.content.slice(message.content.indexOf(args[0]), message.content.length);
        const embed = new MessageEmbed()
        .setTitle('__Report__')
        .setDescription(question)
        .addField('User', `\`${message.member.user.tag}\` | \`${message.member.id}\``)
        .addField('Server', `\`${message.guild.name}\` | \`${message.guild.id}\``)
        .setTimestamp()
        .setColor(Color);

        Channel.send(embed)



      let send = new Discord.MessageEmbed()
        .setColor(`${Color}`)
        .setTitle("**Report**")
        .setDescription(`Your report has been sent it successfully`)

        await message.channel.send(send)
    }
  };
