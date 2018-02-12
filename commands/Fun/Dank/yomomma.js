const request = require("snekfetch");
const discord = require("discord.js");

exports.run = async (client, msg) => {
  const res = await request.get("http://api.yomomma.info").then(data => JSON.parse(data.text));
  const embed = new discord.MessageEmbed()
    .setColor("#e88020")
    .setTitle("📢 **Yomomma joke**")
    .setDescription(`*${res.joke}*`)
    .setTimestamp()
  return msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["yomama"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: ["snekfetch"],
};

exports.help = {
  name: "yomomma",
  description: "Yo momma is so fat, yo.",
  usage: "",
  usageDelim: "",
  type: "commands",
};