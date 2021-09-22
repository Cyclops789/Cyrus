const Schema = require('../../models/info')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { Prefix } = require('../../config.js')
module.exports = {
    name: "setgender",
    description: "set your gender",
    example: `${Prefix}setgender`,
    aliases: [""],
		category: "personal-info",
    run: async (client, message, args, Discord) => {
        if(!args[0]) return message.channel.send('Please provide your gender: **(Male/Female/Transgender)**')

        let choice = ["male", "female", "transgender"];
        if(!choice.includes(args[0].toLowerCase())) return message.channel.send('Invalid Gender.')

        let setgender = args.slice(1).join(" ");

        Schema.findOne({ User: message.author.id }, async(err, data) => {
            if(data) {
              data.Gender = args[0];
              data.save();
            } else {
              new Schema({
                User: message.author.id,
                Gender: args[0],
              }).save();
            }
          })
        if(args[0].toLowerCase() === "male") {
            return message.channel.send('Succesfully set your Gender into **Male**')
        } else if (args[0].toLowerCase() === "female") {
            return message.channel.send('Succesfully set your Gender into **Female**')
        } else if (args[0].toLowerCase() === "transgender") {
            return message.channel.send('Succesfully set your Gender into **Transgender**')
        }
    }
}