require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const { Prefix } = require('./config.js');
const fs = require('fs');

module.exports = client;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

let modules = ['fun', 'info', 'moderation', 'misc', 'Utility', 'anime', 'personal-info', 'dev'];

modules.forEach(function(module) {
	fs.readdir(`./commands/${module}`, function(err, files) {
		if (err)
			return new Error(
				'Missing Folder Of Commands! Example : Commands/<Folder>/<Command>.js'
			);
		files.forEach(function(file) {
			if (!file.endsWith('.js')) return;
			let command = require(`./commands/${module}/${file}`);
			console.log(`\x1b[36m${command.name}\x1b[35m ✅`);
			if (command.name) client.commands.set(command.name, command);
			if (command.aliases) {
				command.aliases.forEach(alias =>
					client.aliases.set(alias, command.name)
				);
			}
		});
	});
});

client.on('message', async message => {
	if (message.channel.type === 'dm') return;
	if (message.author.bot) return;
	if (!message.guild) return;
	if (!message.member)
		message.member = await message.guild.fetchMember(message);

	if (!message.content.startsWith(Prefix)) return;

	const args = message.content
		.slice(Prefix.length)
		.trim()
		.split(' ');
	const cmd = args.shift().toLowerCase();

	if (cmd.length === 0) return;

	let command =
		client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

	if (!command) return;

	if (command) {
		command.run(client, message, args);
	}

	console.log(
		`User : ${message.author.tag} (${message.author.id}) Server : ${
		message.guild.name
		} (${message.guild.id}) Command : ${command.name}`
	);
});

require('./events/eventsMessage/message')(client)
require('./events/eventsMessage/afk')(client);
require('./events/eventsMessage/guildCreate')(client);
require('./events/eventsMessage/guildDelete')(client);
require('./utils/eventReady')(client);
require('discord-buttons')(client);

client.login(process.env.Token);
