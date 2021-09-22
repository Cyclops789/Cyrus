const Schema = require('../../models/info')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { Prefix } = require('../../config.js')

module.exports = {
    name: "setage",
    description: "set your age",
    example: `${Prefix}setage <age>`,
    aliases: [""],
		category: "personal-info",
    run: async (client, message, args) => {
        const ageset = args[0]
        if(!ageset) return message.channel.send('Please provide your Age')
        if(isNaN(ageset)) return message.channel.send('Your age must be number')
        if(ageset > 50) return message.channel.send('Your age must not be higher than 50')
        Schema.findOne({ User: message.author.id }, async(err, data) => {
            if(data) {
              data.Age = ageset;
              data.save();
            } else {
              new Schema({
                User: message.author.id,
                Age: ageset,
              }).save();
            }
          })
          message.channel.send(`Your age has been set to: **${ageset}**`)
        }
    }