const request = require("snekfetch");
const discord = require("discord.js");

exports.run = async (client, msg, [id]) => {
  let req = await request.get("https://api.chucknorris.io/jokes/random")
  if (req.body.category == "explicit" || req.body.category == "religion") req = await request.get("https://api.chucknorris.io/jokes/random");
  if (req.body.category == "explicit" || req.body.category == "religion") req = await request.get("https://api.chucknorris.io/jokes/random");
  if (req.body.category == "explicit" || req.body.category == "religion") req = await request.get("https://api.chucknorris.io/jokes/random");
  if (req.body.category == "explicit" || req.body.category == "religion") req = await request.get("https://api.chucknorris.io/jokes/random");
  if (req.body.category == "explicit" || req.body.category == "religion") req = await request.get("https://api.chucknorris.io/jokes/random");
  const embed = await new discord.MessageEmbed()
    .setColor("#F15A24")
    .setTitle("**Chuck Norris quote**")
    .setDescription(`*${req.body.value}*`)
    .setThumbnail(req.body.icon_url)
    .setTimestamp()
  msg.channel.send(embed)
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["norris","chuckquote"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: ["snekfetch"],
};

exports.help = {
  name: "chucknorris",
  description: "Chuck Norris originally wrote the first bot command.",
  usage: "",
  usageDelim: "",
  type: "commands",
};