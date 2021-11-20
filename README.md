# Cyrus
Cyrus is a Discord Bot with focus on Fun, Moderation, information and much more commands! Made it with Discord.js
* Invite : Click [here](https://cyrus.ga/invite)
* Vote : [Top.gg](https://cyrus.ga/topgg) or [discordlist.space](https://cyrus.ga/discordlist)

[![Discord Bots](https://top.gg/api/widget/status/808425789494263838.svg?noavatar=true)](https://top.gg/bot/808425789494263838)

[![Discord Bots](https://top.gg/api/widget/upvotes/808425789494263838.svg?noavatar=true)](https://top.gg/bot/808425789494263838/vote)

![Cocoapods](https://img.shields.io/cocoapods/l/m?style=for-the-badge)


Dont forget to leave a Star ;)

# Features

* dynamic website
* dynamic help command
* +60 commands and much more
* Chat bot
* Commands handler, event handler

# For self host
<h3>Installation</h3>

* 1 - Download [Node.js](https://nodejs.org/en/download/) 12 / 14
* 2 - Installing required packages:
```sh
npm install
```
<h3>Setup the bot</h3>

* 1 - Go to [Discord Developer Portal](https://discord.com/developers/applications), create your bot and then save the token.
* 2 - Renamed `config.env` to `.env` then change these things
```sh
TOKEN=Your bot's token here
PORT=3001
MONGOPATH=Your mongodb url (for Profile, afk and warn commands)
```
* 3 - goto `config.js` and change these things:
```sh
//Prefix
exports.Prefix = `g.`;
//For embeds color
exports.Color = `#ff0000`;
//Dev id
exports.DevId = `Your ID`;
//log channels (for Misc commands)
exports.Feedback = 'Channel ID';
exports.Report = 'Channel ID';
exports.Suggestion = 'Channel ID';
exports.GuildDelete = 'Channel ID';
exports.GuildCreate = 'Channel ID';

//If you want Ai Bot aka chat bot
exports.ChatBot = 'Channel ID';

//Not important

//Website link
exports.Website = `https://cyrus.ga/`;
//Invit Link, permission should be 939584631
exports.InvLink = `https://discord.com/api/oauth2/authorize?client_id=808425789494263838&permissions=939584631&scope=bot`;
//Supports server link
exports.Supportsrv = `https://discord.gg/mtNwjqGbDU`;
//top.gg link
exports.Topgg = `https://top.gg/bot/808425789494263838`;
//discordlist.space link
exports.Discordlist = `https://discordlist.space/bot/808425789494263838`;
//status page
exports.Status = `https://status.cyrus.ga`;
```
* 4 - run `npm install` to install all packages.
* 5 - run `node server.js` or `npm start` to start the bot.

<a href="https://imgbb.com/"><img src="https://i.ibb.co/X2W0Qm7/Capture.png" alt="Capture" border="0"></a>

* 6 - Or you can Run this project on Replit, 

[![Run on Repl.it](https://replit.com/@cyclopscss/Cyrus-Bot?v=1)](https://replit.com/@cyclopscss/Cyrus-Bot?v=1)
* 6.1 - Setup environment variables:

![terminal](https://i.ibb.co/QfmGg1V/Capture.png)
# Website

* goto `config.json` and change these links to your own links:
```sh
{
	"Topgg_url": "https://top.gg/bot/808425789494263838",
	"Discordlist_url": "https://discordlist.space/bot/808425789494263838",
	"Invite_url": "https://discord.com/api/oauth2/authorize?client_id=808425789494263838&permissions=939584631&scope=bot",
	"Status_url": "https://status.cyrus.ga/",
	"Support_url": "https://discord.gg/mtNwjqGbDU",
	"DevID": "604034501210800128"
}
```
<h3>Home</h4>

<p align="center">
    <img align="center" alt="Home" src="https://i.ibb.co/y8zzJdH/Capture.png"></img>
</p>

<h3>Commands</h4>

<p align="center">
    <img align="center" alt="commands" src="https://i.ibb.co/z2R1Z73/cmds.png"></img>
</p>

<h3>Stats</h4>

<p align="center">
    <img align="center" alt="stats" src="https://i.ibb.co/PDgzhhS/stats.png"></img>
</p>

# Commands
<h5>Information</h5>
<table>
  <tr>
    <th>Commands</th>
    <th>Description</th>
    <th>Permissions</th>
  </tr>
  <tr>
    <td>banner</td>
    <td>display your banner/ User's banner</td>
    <td>null</td>
  </tr>
  <tr>
    <td>profile</td>
    <td>display your profile</td>
    <td>null</td>
  </tr>
  <tr>
    <td>serverinfo</td>
    <td>Show the server information</td>
    <td>null</td>
  </tr>
  <tr>
    <td>userinfo</td>
    <td>Show the user's information</td>
    <td>null</td>
  </tr>
  <tr>
    <td>avatar</td>
    <td>display your avatar/ User's avatar</td>
    <td>null</td>
  </tr>
  <tr>
    <td>botinfo</td>
    <td>Shows all the information about the bot</td>
    <td>null</td>
  </tr>
  <tr>
    <td>dev</td>
    <td>Shows the information about dev</td>
    <td>null</td>
  </tr>
  <tr>
    <td>invite</td>
    <td>null</td>
    <td>null</td>
  </tr>
  <tr>
    <td>iinfo</td>
    <td>4 information cmds in one menu</td>
    <td>null</td>
  </tr>
  <tr>
    <td>systeminfo</td>
    <td>To display some information about the hosting server</td>
    <td>null</td>
  </tr>
</table>
<h5>Moderation</h5>
<table>
  <tr>
    <th>Commands</th>
    <th>Description</th>
    <th>Permissions</th>
  </tr>
  <tr>
    <td>ban</td>
    <td>To ban a user</td>
    <td>BAN_MEMBERS</td>
  </tr>
  <tr>
    <td>unban</td>
    <td>To unban a user</td>
    <td>BAN_MEMBERS</td>
  </tr>
  <tr>
    <td>kick</td>
    <td>Sto kick a user</td>
    <td>KICK_MEMBERS</td>
  </tr>
  <tr>
    <td>mute</td>
    <td>To mute a user</td>
    <td>MANAGE_ROLES</td>
  </tr>
  <tr>
    <td>unmute</td>
    <td>To unmute a user</td>
    <td>MANAGE_ROLES</td>
  </tr>
  <tr>
    <td>clear</td>
    <td>null</td>
    <td>MANAGE_MESSAGES</td>
  </tr>
  <tr>
    <td>warn</td>
    <td>To warn a user</td>
    <td>KICK_MEMBERS</td>
  </tr>
  <tr>
    <td>warnings</td>
    <td>Shows all User's warnings</td>
    <td>KICK_MEMBERS</td>
  </tr>
  <tr>
    <td>lock</td>
    <td>To lock a channel</td>
    <td>MANAGE_ROLES</td>
  </tr>
  <tr>
    <td>unlock</td>
    <td>To unlock a channel</td>
    <td>MANAGE_ROLES</td>
  </tr>
  <tr>
    <td>slowmode</td>
    <td>To change slowmode of a channel</td>
    <td>MANAGE_CHANNELS</td>
  </tr>
</table>
<h5>Fun</h5>
<table>
  <tr>
    <th>Commands</th>
    <th>Description</th>
    <th>Permissions</th>
  </tr>
  <tr>
    <td>howgay</td>
    <td>null</td>
    <td>null</td>
  </tr>
    <tr>
    <td>hello</td>
    <td>throw up a nice hello message</td>
    <td>null</td>
  </tr>
    <tr>
    <td>rate</td>
    <td>null</td>
    <td>null</td>
  </tr>
    <tr>
    <td>pp</td>
    <td>null</td>
    <td>null</td>
  </tr>
    <tr>
    <td>coinflip</td>
    <td>null</td>
    <td>null</td>
  </tr>
    <tr>
    <td>ascii</td>
    <td>convert your text into nice ascii art</td>
    <td>null</td>
  </tr>
    <tr>
    <td>hack</td>
    <td>null</td>
    <td>null</td>
  </tr>
    <tr>
    <td>randomnumber</td>
    <td>null</td>
    <td>null</td>
  </tr>
    <tr>
    <td>8ball</td>
    <td>null</td>
    <td>null</td>
  </tr>
</table>
<h5>Utility</h5>
<table>
  <tr>
    <th>Commands</th>
    <th>Description</th>
    <th>Permissions</th>
  </tr>
  <tr>
    <td>vote</td>
    <td>To vote for somthing</td>
    <td>MANAGE_MESSAGES</td>
  </tr>
  <tr>
    <td>translate</td>
    <td>To translate a text</td>
    <td>null</td>
  </tr>
  <tr>
    <td>embed</td>
    <td>To make a custome embed</td>
    <td>MANAGE_MESSAGES</td>
  </tr>
  <tr>
    <td>google</td>
    <td>To google something</td>
    <td>null</td>
  </tr>
  <tr>
    <td>say</td>
    <td>null</td>
    <td>MANAGE_MESSAGES</td>
  </tr>
  <tr>
    <td>sudo</td>
    <td>Makes a webhook to impersonate someone</td>
    <td>MANAGE_WEBHOOKS</td>
  </tr>
   <tr>
    <td>afk</td>
    <td>To set your afk</td>
    <td>null</td>
  </tr>
</table>
<h5>Anime</h5>
<table>
  <tr>
    <th>Commands</th>
    <th>Description</th>
    <th>Permissions</th>
  </tr>
  <tr>
    <td>anime-info</td>
    <td>Get full information about an anime</td>
    <td>null</td>
  </tr>
  <tr>
    <td>characterinfo</td>
    <td>Get full information about naruto's character</td>
    <td>null</td>
  </tr>
  <tr>
    <td>topanime</td>
    <td>Get top 10 animes per page</td>
    <td>null</td>
  </tr>
  <tr>
    <td>random</td>
    <td>Get random anime gifs</td>
    <td>null</td>
  </tr>
  <tr>
    <td>randomsad</td>
    <td>Get random sad anime gifs</td>
    <td>null</td>
  </tr>
</table>
<h5>Misc</h5>
<table>
  <tr>
    <th>Commands</th>
    <th>Description</th>
    <th>Permissions</th>
  </tr>
  <tr>
    <td>feedback</td>
    <td>To send a feedback to us</td>
    <td>null</td>
  </tr>
   <tr>
    <td>suggestions</td>
    <td>To send an idea or anything to us</td>
    <td>null</td>
  </tr>
   <tr>
    <td>report</td>
    <td>To report us any bugs or issues</td>
    <td>null</td>
  </tr>
</table>

# Soon!
* Upgrading from discord.js v12 > v13
* Dashboard
* Fighting system such as in naruto?
