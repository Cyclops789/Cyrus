const Schema = require('../../models/info')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { Prefix } = require('../../config.js')

module.exports = {
    name: "setfavanime",
    description: "set your favorite anime",
    example: `${Prefix}setfavanime`,
    aliases: [""],
		category: "personal-info",
    run: async (client, message, args) => {
        const favanime = args[0]
        if(!favanime) return message.channel.send('Please provide an anime!')
        Schema.findOne({ User: message.author.id }, async(err, data) => {
            if(data) {
              data.Favanime = favanime;
              data.save();
            } else {
              new Schema({
                User: message.author.id,
                Favanime: favanime,
              }).save();
            }
          })
          message.channel.send(`Your favorite anime has been set to: **${favanime}**`)
        }
    }
