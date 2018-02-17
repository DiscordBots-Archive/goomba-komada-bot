const request = require("snekfetch");
const discord = require("discord.js");

exports.run = async (client, msg, [id]) => {
  if (id) {
    const embed = await new discord.MessageEmbed()
      .setTitle(`Here's ${id.username}'s avatar`)
      .setImage(id.avatarURL({ size: 1024 }))
      .setTimestamp()
    return msg.channel.send(embed)
  }
  const embed = await new discord.MessageEmbed()
    .setTitle(`Here's your avatar`)
    .setImage(msg.author.avatarURL({ format: "png", size: 1024 }))
    .setTimestamp()
  return msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["getavatar"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "avatar",
  description: "Returns a nice embed with your profile picture (a.k.a. avatar).",
  usage: "[someone:user]",
  usageDelim: "",
  type: "commands",
};