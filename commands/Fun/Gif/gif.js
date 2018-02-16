const request = require("snekfetch");
const HTMLParser = require("fast-html-parser");
const discord = require("discord.js");

exports.run = async (client, msg) => {
  const req = await request.get(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY}`)
  console.log(req)
  const embed = new discord.MessageEmbed()
    .setColor([0, 173, 230])
    .setImage(req.body.data.images.original.url)
    .setTimestamp()
    
  return msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: ["snekfetch", "fast-html-parser", "discord.js"],
};

exports.help = {
  name: "gif",
  description: "WIP.",
  usage: "",
  usageDelim: "",
  type: "commands",
};