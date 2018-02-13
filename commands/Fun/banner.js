const { MessageEmbed: RichEmbed } = require('discord.js');
exports.run = async (client, msg, [banner]) => {
  const embed = new RichEmbed()
    .setImage(`https://dummyimage.com/2000x500/36393e/ffffff&text=${encodeURIComponent(banner)}`)
  return msg.channel.send(/*"https://dummyimage.com/2000x500/36393e/ffffff&text=Testing"*/embed);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "banner",
  description: "Creates a big banner from the string you supply",
  usage: "<banner:str>",
  usageDelim: "",
};