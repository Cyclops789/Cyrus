const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "hack",
  aliases: [],
  description: "Hack Member!",
  example: `${Prefix}hack <Mention Member>`,
  category: "fun",
  run: async (client, message, args) => {

    //random passwords

    let replies = [
      "mW-S6aW@",
      "Gf6kV9$T",
      "hX7+_CQg",
      "gRMY^2vz",
      "6=AACu4-",
      "SCD7+u_a",
      "K=XbbE5k",
      "#eRJ5W!^",
      "-WQ-Uj4Q",
      "3Ub^yfPX",
      "g?4TUgUa",
      "vjD+8+aU",
      "kAyba!9q",
      "B8%tP?N_",
      "J32Nnm!-"
];
    let result = Math.floor((Math.random() * replies.length));
    //end
    //random ips

    let quote = ["211.91.180.48",
                "137.255.227.239",
                "241.130.200.42",
                "178.230.231.51",
                "148.18.191.165",
                "209.97.206.130",
                "120.222.249.127",
                "34.137.189.69",
                "211.195.72.228",
                "167.185.177.20",
                "18.206.74.123",
                "248.172.127.74",
                "117.207.242.141",
                "84.193.97.240",
                "120.166.66.31"
                    ];
        let quoteXD = quote[Math.floor(Math.random() * quote.length)];

    //end

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!Member)
      return message.channel.send(
        `Please mention a member that you want to Hack!`
      );
    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hack Status: Completed`)
      .addFields(
		{ name: 'Email:', value: `${Member.user.username}@gmail.com` },
    { name: `Name:`, value: `${Member.user.username}` },
    { name: `ID:`, value: `${Member.user.id}` },
		{ name: 'Password:', value: replies[result], inline: true },
		{ name: 'IP address:', value: quoteXD, inline: true },
	)
      .setFooter(`Jk don't take it serious its just random generated strings!`)
      .setTimestamp();

    await message.channel.send(`Hacking Started! ${Member.user.username}`);

    await message.channel.send(`Hack Status: 10%`).then(msg => msg.delete({
			timeout: 2000
		}));

    await message.channel.send(`Hack Status: 20%`).then(msg => msg.delete({
			timeout: 2000
		}));

    await message.channel.send(`Hack Status: 30%`).then(msg => msg.delete({
			timeout: 2000
		}));

    await message.channel.send(`Hack Status: 40%`).then(msg => msg.delete({
			timeout: 2000
		}));

    await message.channel.send(`Hack Status: 50%`).then(msg => msg.delete({
			timeout: 2000
		}));

    await message.channel.send(`Hack Status: 60%`).then(msg => msg.delete({
			timeout: 2000
		}));

    await message.channel.send(`Hack Status: 70%`).then(msg => msg.delete({
			timeout: 2000
		}));

    await message.channel.send(`Hack Status: 80%`).then(msg => msg.delete({
			timeout: 2000
		}));

    await message.channel.send(`Hack Status: 90%`).then(msg => msg.delete({
			timeout: 2000
		}));

    setTimeout(function() {
      message.channel.send(embed);
    }, 5000);

    //End
  }
};