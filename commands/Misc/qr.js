const { MessageEmbed: msgmb } = require('discord.js');
exports.run = async (client, msg, [...arg]) => {
  var args = arg.join(" ");
  const embed = new msgmb()
    .setTitle("Here's your QR:")
    .setImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(args)}`)
  msg.channel.send({embed});
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "qr",
  description: "Creates a QR code.",
  usage: "<text:str>",
  usageDelim: "",
};