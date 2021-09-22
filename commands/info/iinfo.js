const Discord = require("discord.js");
const { Color, Prefix } = require("../../config.js");
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const dbs = require("discord-buttons");
const channelTypes = {
  dm: 'DM',
  group: 'Group DM',
  text: 'Text Channel',
  voice: 'Voice Channel',
  category: 'Category',
  unknown: 'Unknown',
};

module.exports = {
  name: "iinfo",
  aliases: [],
  category: "info",
  example: `${Prefix}iinfo`,
  description: "Three Information commands in one Menu!",
  run: async (client, message, args) => {

    let option1 = new MessageMenuOption()
      .setLabel("Userinfo")
      .setValue("Option 1")
      .setDescription("This will give you some information about you!")
      .setDefault()

    let option2 = new MessageMenuOption()
      .setLabel("Channel info")
      .setValue("Option 2")
      .setDescription("This will give you information about this channel")
      .setDefault()
    
		let option3 = new MessageMenuOption()
      .setLabel("Avatar")
      .setValue("Option 3")
      .setDescription("This will give you, your Avatar!")
      .setDefault()
    
		let option4 = new MessageMenuOption()
      .setLabel("Serverinfo")
      .setValue("Option 4")
      .setDescription("This will give you, Information about this server!")
      .setDefault()
    
		let selection = new MessageMenu()
      .setID("Selection")
      .setMaxValues(1)
      .setMinValues(1)
      .setPlaceholder("Click me to make a Selection!")
      .addOption(option1)
      .addOption(option2)
      .addOption(option3)
      .addOption(option4)

    let menumsg = await message.channel.send("4 Information commands in one Menu!", selection)

    let member = message.mentions.users.first() || message.member;

    const statuses = {
      online: "Online",
      idle: "Idle",
      dnd: "Do Not Disturb",
      offline: "Offline/Invisible"
    };


    let ops1 = new Discord.MessageEmbed()
      .setTitle(member.user.username + " Information!")
      .setColor(Color)
      .setThumbnail(member.user.displayAvatarURL())
      .addField("Full Name", member.user.tag, true)
      .addField("ID", `${member.id}`, true)
      .addField("Status", statuses[member.presence.status], true)
      .addField(
        `Roles Count`,
        message.guild.members.cache.get(member.user.id).roles.cache.size ||
        "No Roles!", true)
      .addField(`Avatar Url`, `[Link](${member.user.displayAvatarURL()})`, true)
      .addField("Joined Server At", member.joinedAt.toDateString())
      .addField("Joined Discord At", member.user.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();


    const channel = message.channel || message.guild.channels.get(args[0]);

    let ops2 = new Discord.MessageEmbed()
      .setColor(Color)
      .setThumbnail(message.guild.iconURL)
      .setTitle('Channel Info')
      .addField('Name', channel.type === 'dm' ? `<@${channel.recipient.username}>` : channel.name, true)
      .addField('ID', channel.id, true)
      .addField('Creation Date', channel.createdAt.toDateString(), true)
      .addField('NSFW', channel.nsfw ? 'Yes' : 'No', true)
      .addField('Category', channel.parent ? channel.parent.name : 'None', true)
      .addField('Type', channelTypes[channel.type], true)
      .addField('Topic', channel.topic || 'None', true);


    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let ops3 = new Discord.MessageEmbed()
      .setColor(Color)
      .addField(
        "**Links**",
        `[png](${Member.user.displayAvatarURL({
          format: "png",
          dynamic: true
        })}) | [jpg](${Member.user.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}) | [webp](${Member.user.displayAvatarURL({
          format: "webp",
          dynamic: true
        })})`
      )
      .setImage(Member.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp();


    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

    let ops4 = new Discord.MessageEmbed()
      .setTitle(guild.name + " Information!")
      .setColor(Color)
      .setThumbnail(guild.iconURL())
      .addField(`Name`, guild.name, true)
      .addField(`ID`, `${guild.id}`, true)
      .addField(`Owner`, `${guild.owner.user.tag}`, true)
      .addField(`Roles Count`, Roles, true)
      .addField(`Emojis Count`, Emojis, true)
      .addField(`Members Count`, Members, true)
      .addField(`Humans Count`, Humans, true)
      .addField(`Bots Count`, Bots, true)
      .addField(`Server Created At`, guild.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();


    function menuselection(menu) {
      switch (menu.values[0]) {
        case "Option 1":
          menu.reply.send(ops1, true)
          break;
        case "Option 2":
          menu.reply.send(ops2, true)
          break;
        case "Option 3":
          menu.reply.send(ops3, true)
          break;
        case "Option 4":
          menu.reply.send(ops4, true)
          break;
      }
    }

    client.on("clickMenu", (menu) => {
      if (menu.message.id == menumsg.id) {
        if (menu.clicker.user.id == message.author.id) menuselection(menu)
        else menu.reply.send(":x: you are not allowed to pick anything", true)
      }
    })
  }
}
