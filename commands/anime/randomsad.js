const Anime = require("anime-api");
const Discord = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const RandomGifs =  new Anime.Random();


module.exports = {
  name: "randomsad",
  aliases: [],
  category: "anime",
  example: `${Prefix}random`,
  description: "Get random sad anime gifs!",
  run: async (client, message, args) => {
		let random = await RandomGifs.randomSadGif();
        message.channel.send(random)
}
}