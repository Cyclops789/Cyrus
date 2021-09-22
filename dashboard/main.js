const express = require("express");
const path = require("path");
const app = express();
const config = require('./config.json');

const topgg_url = config.Topgg_url;
const discordlist_url = config.Discordlist_url;
const invite_url = config.Invite_url;
const status_url = config.Status_url;
const support_url = config.Support_url;
const devID = config.DevID;

module.exports = async (client) => {


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
	res.status(404).send('404 Not Found / This page in not ready yet!');
});
app.get('/discord', (req, res) => {
	res.status(404).send('404 Not Found / This page in not ready yet!');
});
app.get('/redirect', (req, res) => {
	res.status(404).send('404 Not Found / This page in not ready yet!');
});
app.get('/logout', (req, res) => {
	res.status(404).send('404 Not Found / This page in not ready yet!');
});
app.get('/dashboard', (req, res) => {
	res.status(404).send('404 Not Found / This page in not ready yet!');
});

app.get('/', ( req, res ) => {
	res.render('index', {
		servers: client.guilds.cache.size,
		channels: client.channels.cache.size,
		cmds_size: client.commands.size,
		aliases_size: client.aliases.size,
		users: client.guilds.cache.reduce((a, b) => a + b.memberCount, 0),
		boticon: client.user.displayAvatarURL({size: 4096}),
		invite: invite_url,
		support: support_url,
		statusurl: status_url,
		botname: client.user.username,
	});
});

app.get('/topgg', (req, res) => {
	res.redirect(topgg_url);
});
app.get('/discordlist', (req, res) => {
	res.redirect(discordlist_url);
}); 
app.get('/invite', (req, res) => {
	res.redirect(invite_url);
}); 


app.get('/stats', ( req, res ) => {
	res.render('stats', {
		servers: client.guilds.cache.size,
		channels: client.channels.cache.size,
		cmds_size: client.commands.size,
		aliases_size: client.aliases.size,
		users: client.guilds.cache.reduce((a, b) => a + b.memberCount, 0),
		boticon: client.user.displayAvatarURL({size: 4096}),
		invite: invite_url,
		support: support_url,
		statusurl: status_url,
		dev: {
			image: client.users.cache.get(devID).displayAvatarURL(),
			name: client.users.cache.get(devID).username,
		},
		botname: client.user.username,
	});
});

const animecmds = `${client.commands.filter(cmd => cmd.category === "anime").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}`;
const funcmds = `${client.commands.filter(cmd => cmd.category === "fun").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}`;
const infocmds = `${client.commands.filter(cmd => cmd.category === "info").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}`;
const misccmds = `${client.commands.filter(cmd => cmd.category === "Misc").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}`;
const modcmds = `${client.commands.filter(cmd => cmd.category === "Moderation").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}`;
const utilitycmds = `${client.commands.filter(cmd => cmd.category === "Utility").array().map(m => m.name.charAt(0).toUpperCase() + m.name.slice(1)).join(", ")}`;

app.get('/commands', ( req, res ) => {
	res.render('commands', {
		servers: client.guilds.cache.size,
		channels: client.channels.cache.size,
		cmds_size: client.commands.size,
		aliases_size: client.aliases.size,
		users: client.guilds.cache.reduce((a, b) => a + b.memberCount, 0),
		boticon: client.user.displayAvatarURL({size: 4096}),
		invite: invite_url,
		support: support_url,
		statusurl: status_url,
		dev: {
			image: client.users.cache.get(devID).displayAvatarURL(),
			name: client.users.cache.get(devID).username,
		},
		anime: animecmds,
		info: infocmds,
		misc: misccmds,
		mod: modcmds,
		utility: utilitycmds,
		fun: funcmds,
		botname: client.user.username,
	});
});

app.listen(process.env.PORT, () => {
	console.log(`> \x1B[34mServer \x1b[37mis \x1b[32monline \x1b[36mon \x1b[33mport: \x1b[31m${process.env.PORT}!`)
});
}