const request = require("snekfetch");
const HTMLParser = require("fast-html-parser");
const discord = require("discord.js");

exports.run = async (client, msg) => {
  const { text: html } = await request.get("http://www.fmylife.com/random");
  const root = HTMLParser.parse(html);
  const article = root.querySelector(".block a");
  const embed = new discord.MessageEmbed()
    .setColor([0, 173, 230])
    .setDescription(`**${article.text}**`)
    .setThumbnail("https://lh3.googleusercontent.com/fjs43qbdGjdNVlhDF1RvTC6q0T5gAxVFsmq_3_msZjdW8g6wsWABTJHRdo6HEexevW4=w300")
    .setTimestamp()
    .setAuthor("FML", "https://lh3.googleusercontent.com/fjs43qbdGjdNVlhDF1RvTC6q0T5gAxVFsmq_3_msZjdW8g6wsWABTJHRdo6HEexevW4=w300")
    // .setTitle("FML Quote")
    
  return msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: ["snekfetch", "fast-html-parser", "discord.js"],
};

exports.help = {
  name: "fml",
  description: "Grabs random 'Fuck My Life' quote from the web.",
  usage: "",
  usageDelim: "",
  type: "commands",
};