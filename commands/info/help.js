const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix, InvLink, Website, Supportsrv } = require("../../config.js");
const pagination = require('discord.js-pagination');
const lineReply = require('discord-reply');
const { Animecmds, Funcmds, Infocmds, Misccmds, Modcmds, Utilitycmds } = require("../commands");


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
      .setDescription(`\`\`\` ${client.commands.filter(cmd => cmd.category === "fun").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")} \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setTimestamp()
      .setColor(Color)

    const info = new Discord.MessageEmbed()
      .setTitle(`Information`)
      .setDescription(`\`\`\` ${client.commands.filter(cmd => cmd.category === "info").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")} \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setColor(Color)
      .setTimestamp()

    const mod = new Discord.MessageEmbed()
      .setTitle(`Moderation`)
      .setDescription(`\`\`\` ${client.commands.filter(cmd => cmd.category === "Moderation").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")} \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setTimestamp()
      .setColor(Color)

    const utility = new Discord.MessageEmbed()
      .setTitle(`Utility`)
      .setDescription(`\`\`\` ${client.commands.filter(cmd => cmd.category === "Utility").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")} \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setTimestamp()
      .setColor(Color)

    const misc = new Discord.MessageEmbed()
      .setTitle(`Misc`)
      .setDescription(`\`\`\`${client.commands.filter(cmd => cmd.category === "Misc").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")} \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setColor(Color)
      .setTimestamp()

		const anime = new Discord.MessageEmbed()
      .setTitle(`Anime`)
      .setDescription(`\`\`\` ${client.commands.filter(cmd => cmd.category === "anime").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")} \`\`\``)
      .addField(`Links`, `[Add Me](${InvLink}) | [Support Server](${Supportsrv}) | [Cyrus Website](${Website})`)
      .setColor(Color)
      .setTimestamp()

    const pages = [
      intro,
      fun,
      info,
      mod,
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
