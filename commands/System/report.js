const {
  MessageEmbed
} = require("discord.js");
exports.run = async (client, msg, [report]) => {
  const embed = new MessageEmbed()
    .setTitle(`Bug Report by ${msg.author.username}`)
    .setDescription(`${report}`)
    .setTimestamp(msg.createdAt)
  /*message.channel
    .send(embed)
    .catch(console.error);*/
  client.BugHook.send(embed);
  msg.channel.send(":incoming_envelope: Bug report sent!")
};
exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["report"],
  permLevel: 0,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "bugreport",
  description: "Report bugs with this.",
  usage: "<report:str>",
  usageDelim: "",
};