const Anime = require("anime-api");
const Discord = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const disbut = require('discord-buttons');

module.exports = {
  name: "topanime",
  aliases: ["topa"],
  category: "anime",
  example: `${Prefix}topanime`,
  description: "Get top 10 animes per page!",
  run: async (client, message, args) => {
        let TopAnime = new Anime.TopPages({
              Client : client,
              color : Color, 
              TopAnimes: 50,
              buttonsTimeout : 100000,
              Pages : Number(args[1]),
            })
        return TopAnime.ButtonsPages(client , message , '<' , ">").catch(err => {throw err});
  }
}