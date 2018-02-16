const request = require("snekfetch");
const HTMLParser = require("fast-html-parser");
const discord = require("discord.js");

exports.run = async (client, msg) => {
  const embed = new discord.MessageEmbed()
    .setColor([0, 173, 230])
    .setImage("http://belikebill.azurewebsites.net/billgen-API.php?default=1")
    .setTimestamp()
    
  return msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["belikebill"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: ["snekfetch", "fast-html-parser", "discord.js"],
};

exports.help = {
  name: "bill",
  description: "Bill is wise. Be like Bill.",
  usage: "",
  usageDelim: "",
  type: "commands",
};