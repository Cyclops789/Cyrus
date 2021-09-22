const Schema = require('../../models/info')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { Prefix } = require('../../config.js')

module.exports = {
    name: "setbio",
    description: "set your BIO, i assume you know what bio is.",
    example: `${Prefix}setbio`,
    aliases: [""],
		category: "personal-info",
    run: async (client, message, args) => {
        const setbio = args.join(" ")
        if(!setbio) return message.channel.send('Please provide a valid Bio')
        if(setbio > 312) return message.channel.send('Sorry but you can only set your bio up to 312 Letters')
        if(setbio < 5) return message.channel.send('Your bio must be up to 5 Letters.')
        
        Schema.findOne({ User: message.author.id }, async(err, data) => {
            if(data) {
              data.Bio = setbio
              data.save();
            } else {
              new Schema({
                User: message.author.id,
                Bio: setbio,
              }).save();
            }
          })
          message.channel.send(`Succesfully Set your Bio Into: \n**${setbio}**`)
    }
}