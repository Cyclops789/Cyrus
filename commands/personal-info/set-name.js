const Schema = require('../../models/info')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { Prefix } = require('../../config.js')
module.exports = {
    name: "setname",
    description: "set your own name",
   	example: `${Prefix}setname`,
    aliases: [""],
		category: "personal-info",
    run: async (client, message, args) => {
        const set = args[0]
        if(!set) return message.channel.send('Please provide your Name')
        Schema.findOne({ User: message.author.id }, async(err, data) => {
            if(data) {
              data.Name = set;
              data.save();
            } else {
              new Schema({
                User: message.author.id,
                Name: set,
              }).save();
            }
          })
          message.channel.send(`Your name has been set to: **${set}**`)
        }
    }