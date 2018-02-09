const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const status = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline/Invisible"
};
// const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
exports.run = (client, msg, args) => {
  msg.channel.send("Gathering user info...").then(m => {
    const member = msg.mentions.members.first() || msg.guild.members.get(args[0]) || msg.member;
    if (!member) return msg.reply("please provide a vaild Mention or USER ID");
    let bot;
    if (member.user.bot === true) {
      bot = "Yes";
    } else {
      bot = "No";
    }
    const img = member.user.avatarURL
    /* const embed = new Discord.RichEmbed()
      .setColor(randomColor)
      .setThumbnail(`${member.user.avatarURL}`)
      .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL}`)
      .addField("Nickname:", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "No nickname"}`, true)
      .addField("Bot", `${bot}`, true)
      .addField("Guild", `${bot}`, true)
      .addField("Status", `${status[member.user.presence.status]}`, true)
      .addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Not playing anything."}`, true)
      .addField("Roles", `${member.roles.filter(r => r.id !== msg.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
      .addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
      .addField("Created At", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true); */
    const game = member.user.presence.game ? `${member.user.presence.game.name}` : "Not playing anything."
    const nick = member.nickname !== null ? `Nickname: ${member.nickname}` : "No nickname"
    const embed = {
    /* "title": "STATISTICS",
    "description": "Here are listed the bot's statistics.", */
    "color": 15386243,
    "timestamp": new Date(),
    "footer": {img,
      "text": `${msg.guild.settings.prefix}stats`
    },
    "thumbnail": {
      "url": img
    },
    "author": {
      "name": `${member.user.tag} (${member.id})`,
      "icon_url": img
    },
    "fields": [
      {
        "name": "Nickname:",
        "value": `${nick}`,
        "inline": true
      },
      {
        "name": "Bot",
        "value": `${bot}`,
        "inline": true
      },
      {
        "name": "Guild",
        "value": bot,
        "inline": true
      },
      {
        "name": "Status",
        "value": `${status[member.user.presence.status]}`,
        "inline": true
      },
      {
        "name": "Playing",
        "value": `${game}`,
        "inline": true
      },
      {
        "name": "Roles",
        "value": `${member.roles.filter(r => r.id !== msg.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`,
        "inline": true
      },
      {
        "name": "Created at",
        "value": `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`,
        "inline": true
      },
      {
        "name": "Joined at",
        "value": `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`,
        "inline": true
      }
    ]
  }

    m.edit({ embed });
  });
};


exports.conf = {
   enabled: true,
   runIn: ["text", "group"],
   aliases: ["uinfo"],
   permLevel: 0,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
 };

exports.help = {
  name: 'userinfo',
  description: 'Gets user info from a mention or id.',
  usage: '<mention|id:str>',
  usageDelim: ""
};