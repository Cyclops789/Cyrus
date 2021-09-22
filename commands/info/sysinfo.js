const Discord = require('discord.js');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
const { re } = require('mathjs');
const { Color, Prefix } = require("../../config.js");

module.exports = {
    name: "systeminfo",
    aliases: ["sysinfo", "gpu"],
    category: "Info",
    description: "Get the information about the vps!",
    example: `${Prefix}systeminfo`,

    run: async(client, message, args) => {

        const { totalMemMb, usedMemMb } = await mem.info();

        const systeminfo = stripIndent`
        OS        : ${await os.oos()}
        CPU       : ${cpu.model()}
        Cores     : ${cpu.count()}
        CPU Usage : ${await cpu.usage()} %
        RAM       : ${totalMemMb} MB
        RAM Usage : ${usedMemMb} MB 
        `;
        const embed = new Discord.MessageEmbed()
        .setTitle(`System Information`)
        .setDescription(`\`\`\`\n${systeminfo}\`\`\``)
        .setColor(Color)

        message.channel.send(embed)
    }
}