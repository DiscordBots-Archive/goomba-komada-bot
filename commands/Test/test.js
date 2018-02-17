const {
  MessageEmbed // or RichEmbed
} = require("discord.js");
exports.run = async (client, message) => {
  /*const embed = new MessageEmbed() // or RichEmbed
    .setColor(0xb22222)
    .setTitle(`Welcome ${message.author.username}!`)
    .setImage(message.author.avatarURL()) // or .setThumbnail()
    .setDescription(`Everybody say welcome to ${message.author}! Welcome in ${message.guild.name}!`)
  message.channel
    .send(embed)
    .catch(console.error);*/
  
};
exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 10,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "test",
  description: "Test command.",
  usage: "",
  usageDelim: "",
};