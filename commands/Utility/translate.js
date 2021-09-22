const Discord = require('discord.js');
const { translate } = require('bing-translate-api');
const { Color, Prefix } = require("../../config.js");
const lineReply = require('discord-reply');

module.exports = {
  name: "translate",
  aliases: ["t"],
  category: "Utility",
  description: "Transaltes to your prefered language",
  example: `${Prefix}translate english Hola`,

  run: async (client, message, args) => {

    if (args.length < 2) {
    return message.lineReplyNoMention(`You missed an argument **\`${Prefix}translate [language that you wanne translate] Word\`** for example **\`${Prefix}translate spanish Hello\`**`)
    }
  
    try {

      const result = await translate(args.slice(1).join(' '), null, args[0]);
      
      const embed = new Discord.MessageEmbed()
      .setColor(Color)
      .addField('Translated from', `\`\`\`${result.text}\`\`\``)
      .addField('Translated to', `\`\`\`${result.translation}\`\`\``)
      .setTimestamp()
      message.lineReplyNoMention(embed)
    }  catch (err) {
      message.lineReplyNoMention(`:x: Failed to translate **${args[1]}** to **${args[0]}**`);
    }
  }
}