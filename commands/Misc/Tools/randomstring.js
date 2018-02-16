const uniqueString = require('unique-string');
exports.run = async (client, msg, args) => {
  msg.channel.send(`\`\`\`${uniqueString()}\`\`\``);
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["rndstr","randomstr","strrnd"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: ["unique-string"],
};

exports.help = {
  name: "randomstring",
  description: "Generate a random MD5-hash-like string.",
  usage: "",
  usageDelim: "",
};