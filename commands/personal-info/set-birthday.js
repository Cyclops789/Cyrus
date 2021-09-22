const Schema = require('../../models/info')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { Prefix } = require('../../config.js')

module.exports = {
  name: "setbirthday",
  description: "set your birthday",
  example: `${Prefix}setbirthday`,
  aliases: [""],
	category: "personal-info",
  run: async (client, message, args) => {
    const months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };
    const joined = args.join(" ");
    const split = joined.trim().split("/");
    
    let [ day, month] = split;
    if(!day) return message.channel.send("Please give a day, example: 26/10");
    if(!month) return message.channel.send("Please give a month, example: 26/10");
    
    if(isNaN(day) || isNaN(month)) return message.channel.send("the date you gave isnt a number");
    
    day = parseInt(day);
    month = parseInt(month);
    
    if(!day || day> 31) return message.channel.send("Wrong day format");
    if(!month || month> 12) return message.channel.send("Wrong month format");
    
    //const convertedDay = suffixes(day);
    const convertedMonth = months[month]
    const birthdayString = `${day} of ${convertedMonth}`
    Schema.findOne({ User: message.author.id }, async(err, data) => {
      if(data) {
        data.Birthday = birthdayString;
        data.save();
      } else {
        new Schema({
          User: message.author.id,
          Birthday: birthdayString,
        }).save();
      }
    })
    message.channel.send(`Your Birthday has been set to: \n**${birthdayString}**`)
  },
};