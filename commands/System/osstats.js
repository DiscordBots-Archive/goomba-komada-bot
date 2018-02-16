const si = require('systeminformation');
const { MessageAttachment, MessageEmbed } = require("discord.js");
exports.run = async (client, msg, args) => {
  const prefix = msg.guild ? msg.guild.settings.prefix : "+"
  let embed = new MessageEmbed()
 
  // callback style
  si.cpu(function(data) {
    embed.addField("CPU infos", `${data.manufacturer} ${data.brand}
${data.cores} ${data.cores > 1 ? "cores" : "core"}`)
  });
  si.osInfo(function(d) {
    console.log(d);
  });
  
  msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["os", "statsos"],
  permLevel: 10,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "osstats",
  description: "Provides some stats about the OS the bot's on.",
  usage: "",
  usageDelim: "",
};