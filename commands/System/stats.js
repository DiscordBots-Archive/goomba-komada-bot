const { version: discordVersion, MessageEmbed } = require("discord.js");
const { version: komadaVersion, Duration } = require("komada");
const snek = require('snekfetch');
const moment = require("moment");
require("moment-duration-format");

exports.run = async (client, msg, args) => {
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  let totalCommands = 0;
  client.commands.forEach(cmd => {
    totalCommands += 1;
  });
  const prefix = msg.guild ? msg.guild.settings.prefix : "+"
  const embed = {
    "title": "STATISTICS",
    "description": "Here are listed the bot's statistics.",
    "color": 15386243,
    "timestamp": new Date(),
    "footer": {
      "icon_url": client.user.avatarURL,
      "text": `${prefix}stats`
    },
    "author": {
      "name": client.user.username,
      "icon_url": "https://cdn.discordapp.com/avatars/407272032431112202/d454ec9bd2592aa369941e347fe22a4c.webp?size=256"
    },
    "fields": [
      {
        "name": "Memory Usage",
        "value": `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
      },
      {
        "name": "Uptime",
        "value": `${duration}`
      },
      {
        "name": "Users",
        "value": `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
        "inline": true
      },
      {
        "name": "Guilds",
        "value": `${client.guilds.size.toLocaleString()}`,
        "inline": true
      },
      {
        "name": "Channels",
        "value": `${client.channels.size.toLocaleString()}`,
        "inline": true
      },
      {
        "name": "Komada",
        "value": `v${komadaVersion}`,
        "inline": true
      },
      {
        "name": "Discord",
        "value": `v${discordVersion}`,
        "inline": true
      },
      {
        "name": "Node.js",
        "value": `${process.version}`
      },
      {
        "name": "Bot Version",
        "value": `${client.version}`
      },
      {
        "name": "Total Commands",
        "value": `There's a total of ${totalCommands} commands overall. Cool, heh?`
      }
    ]
  };
  msg.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["details", "what"],
  permLevel: 0,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "stats",
  description: "Provides some stats about the bot.",
  usage: "",
  usageDelim: "",
};