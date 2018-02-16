const request = require("snekfetch");
const discord = require("discord.js");

exports.run = async (client, msg, [id]) => {
  if (id) {
    const res = await request.get(`https://icanhazdadjoke.com/j/${id}`)
      .set('Accept', 'application/json')
      .set('User-Agent', 'Goomba Bot (https://github.com/Samplasion/goomba-komada-bot)')
    const embed = await new discord.MessageEmbed()
      .setColor("#FEDE58")
      .setThumbnail("https://icanhazdadjoke.com/static/smile.svg")
      .setTitle("**Dadjoke**")
      .setDescription(`*${res.body.joke}*`)
      .setFooter(`ID: ${res.body.id}`)
      .setTimestamp()
    return msg.channel.send(embed)
  }
  const res = await request.get("https://icanhazdadjoke.com/")
    .set('Accept', 'application/json')
    .set('User-Agent', 'Goomba Bot (https://github.com/Samplasion/goomba-komada-bot)')
  const embed = await new discord.MessageEmbed()
    .setColor("#FEDE58")
    .setThumbnail("https://icanhazdadjoke.com/static/smile.svg")
    .setTitle("**Dadjoke**")
    .setDescription(`*${res.body.joke}*`)
    .setFooter(`ID: ${res.body.id}`)
    .setTimestamp()
  console.log(res.body)
  return msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["dad","daddyjoke"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: ["snekfetch"],
};

exports.help = {
  name: "dadjoke",
  description: "I’ll tell you something about German sausages, they’re the wurst.",
  usage: "[id:str]",
  usageDelim: "",
  type: "commands",
};