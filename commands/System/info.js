const { inspect } = require("util");
const { MessageAttachment, MessageEmbed, version } = require("discord.js");
const snekfetch = require("snekfetch");

/* eslint-disable no-eval, consistent-return */
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
exports.run = async (client, message, [args]) => {
  const { body } = await snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/`);
  const prefix = message.guild ? message.guild.settings.prefix : "+"
  const embed = new MessageEmbed()
    .setColor(message.guild.me.roles.highest.color || randomColor)
    .addField(`**${client.user.tag}**`, `${body.shortdesc}`)
    .addField("**Library**", `${body.lib}, ver.${version}`, true)
    .addField("**Upvotes** on DBL", body.points, true)
    .addField("**Owner**", `<@${body.owners.join(">, <@")}>`, true)
    .addField("**Server Count**", body.server_count, true)
    .addField("**Useful links**", `[Support Server](https://discord.gg/${body.support}) | [DBL Page](https://discordbots.org/bot/407272032431112202)`, true)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail(`https://cdn.discordapp.com/avatars/${body.clientid}/${body.avatar}.png`)
    .setTimestamp()
    .setFooter(`${prefix}info`)
  return message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "info",
  description: "Shows info on the bot",
  usage: "",
  usageDelim: "",
};