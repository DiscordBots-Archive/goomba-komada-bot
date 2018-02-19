const snekfetch = require("snekfetch");
const { URLSearchParams } = require("url");
const discord = require("discord.js");

exports.run = async (client, msg, [up, down]) => {
  const meme = await twoMeme(61520, up, down);
  const embed = new discord.MessageEmbed()
    .setImage(meme)
    .setFooter(`Requested by ${msg.author.username}`)
    
  return msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["skeptical", "fry"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: ["snekfetch", "fast-html-parser", "discord.js"],
};

exports.help = {
  name: "unsure",
  description: "I'm unsure if put this text or not...",
  usage: "<textUp:str> [textDown:str]",
  usageDelim: ";",
  type: "commands",
};

async function twoMeme(template_id, text1, text2, font = "impact", max_font_size = "50px") {
  const params = new URLSearchParams();
  if (text2 == undefined || text2 == "") {
    text1 = text1;
    text2 = "";
  }
  params.append("template_id", template_id);
  params.append("username", process.env.IMGFLIP_USER);
  params.append("password", process.env.IMGFLIP_PSWD);
  params.append("font", font);
  params.append("max_font_size", max_font_size);
  params.append("text0", text1);
  params.append("text1", text2);
  const { body } = await snekfetch.post(`https://api.imgflip.com/caption_image?${params}`);
  return body.data.url;
}