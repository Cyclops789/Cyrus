const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Scraper = require("mal-scraper");
const { Color, Prefix } = require("../../config.js");

module.exports = {
	name: "anime-info",
	aliases: ["a-info"],
	description: "Get full information about an anime!!",
	example: `${Prefix}anime-info <anime name>`,
	category: "anime",
	run: async(client, message, args) => {
        let Text = args.join(" ");

        if (!Text) return message.channel.send(`Please give me an anime name!`)

        let Msg = await message.channel.send(`**Searching....**`);

        let Replaced = Text.replace(/ +/g, " ");

        await Msg.delete();

        let Anime;

        let Embed;

        try {

        Anime = await Scraper.getInfoFromName(Replaced);

        if (!Anime.genres[0] || Anime.genres[0] === null) Anime.genres[0] = "None";

        Embed = new MessageEmbed()
        .setColor(Color)
        .setURL(Anime.url)
        .setTitle(Anime.title)
        .setDescription(Anime.synopsis)
        .addField(`Type:`, Anime.type, true)
        .addField(`Status:`, Anime.status, true)
        .addField(`Premiered:`, Anime.premiered, true)
        .addField(`Episodes:`, Anime.episodes, true)
        .addField(`Duration:`, Anime.duration, true)
        .addField(`Popularity:`, Anime.popularity, true)
        .addField(`Gneres:`, Anime.genres.join(", "))
        .setThumbnail(Anime.picture)
        .setFooter(`Score: ${Anime.score}`)

        } catch (error) {
          return message.channel.send(`No Anime Found!`);
        };

        return message.channel.send(Embed);

    }
};