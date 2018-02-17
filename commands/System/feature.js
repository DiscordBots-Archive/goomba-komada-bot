const {
  MessageEmbed
} = require("discord.js");
exports.run = async (client, msg, [suggestion]) => {
  const embed = new MessageEmbed()
    .setTitle(`Feature Suggestion by ${msg.author.username}`)
    .setDescription(`${suggestion}`)
    .setTimestamp(msg.createdAt)
  /*message.channel
    .send(embed)
    .catch(console.error);*/
  client.FeatureHook.send(embed);
  msg.channel.send(":incoming_envelope: Suggestion sent!")
};
exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["featuresugg", "suggestion", "suggest"],
  permLevel: 0,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
  cooldown: 600000,
};

exports.help = {
  name: "feature",
  description: "Suggest features with this.",
  usage: "<suggestion:str>",
  usageDelim: "",
};