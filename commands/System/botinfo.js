const { inspect } = require("util");
const { MessageAttachment, MessageEmbed, version } = require("discord.js");
const snekfetch = require("snekfetch");

/* eslint-disable no-eval, consistent-return */
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
exports.run = async (client, message, [user]) => {
  const bot = message.mentions.members.first();
  if (!bot.user.bot) return message.reply(`${bot} is not a bot! Please retry.`)
  const { body } = await snekfetch.get(`https://discordbots.org/api/bots/${bot.user.id}/`)
    // .catch(message.reply("something went wrong. Please retry."));
  const links   = [],
        nolinks = [];
  body.invite ? links.push(`[Invite Link](${body.invite})`) : nolinks.push("");
  body.support ? links.push(`[Support Server](https://discord.gg/${body.support})`) : nolinks.push("");
  body.github ? links.push(`[GitHub Repo](${body.github})`) : nolinks.push("");
  body.website ? links.push(`[Website](${body.website})`) : nolinks.push("");
  links.push(`[DBL Page](https://discordbots.org/bot/${bot.user.id})`)
  // console.log(body)
  const prefix = message.guild ? message.guild.settings.prefix : "+"
  const embed = new MessageEmbed()
    .setColor(message.guild.me.roles.highest.color || randomColor)
    .addField(`**${body.username}#${body.discriminator}**`, `${body.shortdesc}`)
    .addField("**Library**", `${body.lib}`, true)
    .addField("**Upvotes** on DBL", body.points, true)
    .addField(body.owners.length < 2 ? "**Owner**" : "**Owners**", `<@${body.owners.join(">, <@")}>`, true)
    .addField("**Server Count**", body.server_count != undefined ? body.server_count : "No server count", true)
    .addField("**Prefix**", `${body.prefix}`, true)
    .addField("**Certified**", body.certifiedBot ? ":white_check_mark: Yes" : ":negative_squared_cross_mark: No", true)
    .addField("**Shards**", `${body.shards.length != 0 ? body.shards : "No shards"}`, true)
    .addField("**Tags**", `${body.tags.length != 0 ? body.tags.join(", ") : "No tags"}`, true)
    .addField("**Useful links**", `${links.join(" | ")}`, true)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setThumbnail(`https://cdn.discordapp.com/avatars/${body.clientid}/${body.avatar}.png`)
    .setTimestamp()
    .setFooter(`${prefix}botinfo`)
  return message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["botinfo"],
  permLevel: 0,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "botinfo",
  description: "Shows info about the mentioned bot",
  usage: "<bot:mention>",
  usageDelim: "",
};