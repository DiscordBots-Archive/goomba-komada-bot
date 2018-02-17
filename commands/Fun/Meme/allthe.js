const snekfetch = require("snekfetch");
const { URLSearchParams } = require("url");
const discord = require("discord.js");

exports.run = async (client, msg, [up, down]) => {
  const meme = await twoMeme(61533, up, down);
  const embed = new discord.MessageEmbed()
    .setImage(meme)
    .setFooter(`Requested by ${msg.author.username}`)
    
  return msg.channel.send(embed);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["xallthey","allthey","xallthe"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: ["snekfetch", "fast-html-parser", "discord.js"],
};

exports.help = {
  name: "allthe",
  description: "Fun all the commands",
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