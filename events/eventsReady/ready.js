const Discord = require("discord.js")
const mongo = require('../../utils/mongo.js');
const { Prefix } = require('../../config.js')
const Dashboard = require("../../dashboard/main");

module.exports = async (client) => {

console.log(`> \x1b[34m${client.user.username} \x1b[36mIS ONLINE`)

await mongo()
	
const activities = [
		`${Prefix}help - cyrus.ga`,
		`in ${client.guilds.cache.size} Servers!`,
		`in ${client.channels.cache.size} Channels!`,
		`with ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users!`,
		];
let i = 0;
setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'PLAYING' }), 60000);
	console.log(`> \x1b[33mMADE \x1b[37mIN \x1b[31mMOR\x1b[32mO\x1b[31mCCO`)

	Dashboard(client);
}