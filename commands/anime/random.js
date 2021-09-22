const Anime = require("anime-api");
const Discord = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const RandomGifs =  new Anime.Random();

module.exports = {
  name: "random",
  aliases: [],
  category: "anime",
  example: `${Prefix}random naruto`,
  description: "Get random anime gifs!",
  run: async (client, message, args) => {
		let random = await RandomGifs.findRandomGif(args);
     
		if (!args[0])
      return message.channel.send("Please give me a name!");

		 if(random){
        message.channel.send(random)
     } else {
         message.channel.send("Not Found")
     }
	}
}