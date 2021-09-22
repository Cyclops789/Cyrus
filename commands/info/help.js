const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix, InvLink, Website, Supportsrv } = require("../../config.js");
const pagination = require('discord.js-pagination');
const lineReply = require('discord-reply');

module.exports = {

  name: "help",
  aliases: ["assist", "commands"],
  category: "Info",
  description: "display help menu",
  example: `${Prefix}help <Command name>`,
  category: "info",

  run: async (client, message, args) => {

    const intro = new Discord.MessageEmbed()
      .setAuthor("Cyrus", client.user.displayAvatarURL())
			.addField(`For the detailed help for a command`, `\`Use ${Prefix}help [command name]\``)
      .addField('I have commands for:', `\`Fun\`\n \`Information\`\n  \`Moderation\`\n \`Image\`\n \`Misc\`\n  \`Utility\`\n \`Anime\`\n`)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setColor(Color)
      .setImage("https://media.discordapp.net/attachments/810599615799754793/876214483788378123/gaara-naruto.gif")
      .setTimestamp()

    const fun = new Discord.MessageEmbed()
      .setTitle(`Fun`)
      .setDescription(`\`\`\` hello, coinflip, howgay, rate, dicksize, ascii, hack, randomnumber, 8ball. \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setTimestamp()
      .setColor(Color)

    const info = new Discord.MessageEmbed()
      .setTitle(`Information`)
      .setDescription(`\`\`\` profile, serverinfo, membercount, iinfo, userinfo, avatar, banner, botinfo, dev, systeminfo, invite. \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setColor(Color)
      .setTimestamp()

    const mod = new Discord.MessageEmbed()
      .setTitle(`Moderation`)
      .setDescription(`\`\`\` clear, mute, unmute, kick, ban, unban, warn, warnings, lock, unlock, slowmode. \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setTimestamp()
      .setColor(Color)

    const utility = new Discord.MessageEmbed()
      .setTitle(`Utility`)
      .setDescription(`\`\`\`afk, translate, vote, embed, google, say, sudo. \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setTimestamp()
      .setColor(Color)

    const image = new Discord.MessageEmbed()
      .setTitle(`Image`)
      .setDescription(`\`\`\` blink, kiss, blur, criminal, delete, gay, meme, slap, triggered. \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setTimestamp()
      .setColor(Color)

    const misc = new Discord.MessageEmbed()
      .setTitle(`Misc`)
      .setDescription(`\`\`\` report, suggestion, feedback. \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setColor(Color)
      .setTimestamp()

		const anime = new Discord.MessageEmbed()
      .setTitle(`Anime`)
      .setDescription(`\`\`\` characterinfo, topanime, anime-info, random, randomsad. \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setColor(Color)
      .setTimestamp()

    const pages = [
      intro,
      fun,
      info,
      mod,
      image,
      misc,
      utility,
			anime
    ]

		const emojiList = ["⏪", "⏩"];

    const timeout = '7200000 '

    if (!args[0]) return pagination(message, pages, emojiList, timeout).catch(err => message.channel.send(`**${err}**, require: **ADD_REACTIONS**`))
    let command = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));

    if (!command) return;
    
    const embed = new Discord.MessageEmbed()

      .setTitle('Command Info')
      .addField('Name', `\`\`\`${command.name}\`\`\``, true)
      .addField('Category', `\`\`\`${command.category}\`\`\``, true)
      .addField('Aliases', `\`\`\`${command.aliases.length < 1 ? 'None' : command.aliases.join(', ')}\`\`\``, true)
      .addField('Example', `\`\`\`${command.example}\`\`\``, true)
      .addField('Description', `\`\`\`${command.description || "No description provided!"}\`\`\``)
      .setTimestamp()
      .setColor(Color)
    message.lineReplyNoMention(embed)
  }
}