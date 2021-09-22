const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const lineReply = require('discord-reply')

module.exports = {
  name: "hi",
  aliases: ["hello"],
  description: "Hello",
  example: `${Prefix}hi`,
  category: "fun",
  run: async (client, message, args) => {

  let quote = ["Hi, my name is cyrus!",
                     "( ͡° ͜ʖ ͡°)",
                     "Meow~.",
                     "Honk Honk!",
                     "I am riding bike!",
                     "(づ｡◕‿‿◕｡)づ",
                     "Hello, how are you today",
                     "◃┆◉◡◉┆▷",
                     "(✿◠‿◠)",
                     "ヽ(〃＾▽＾〃)ﾉ"
                    ];
        let quoteXD = quote[Math.floor(Math.random() * quote.length)];
        //return message.channel.send(quoteXD);
        return message.lineReplyNoMention(quoteXD);
    }
}