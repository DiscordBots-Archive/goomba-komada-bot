const snekfetch = require("snekfetch");
const { URLSearchParams } = require("url");
const discord = require("discord.js");

exports.run = async (client, msg, [up, mid1, mid2, down]) => {
  const meme = await fourMeme(93895088, up.toUpperCase(), mid1.toUpperCase(), mid2.toUpperCase(), down.toUpperCase());
  const embed = new discord.MessageEmbed()
    .setImage(meme)
    .setFooter(`Requested by ${msg.author.username}`)
    
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
  name: "brain",
  description: "Let your brain expand...",
  usage: "<textUp:str> <textMid1:str> <textMid2:str> <textDown:str>",
  usageDelim: ";",
  type: "commands",
};

async function fourMeme(template_id, text1, text2, text3, text4, font = "impact", max_font_size = "50px") {
  const params = new URLSearchParams();
  params.append("template_id", template_id);
  params.append("username", process.env.IMGFLIP_USER);
  params.append("password", process.env.IMGFLIP_PSWD);
  params.append("font", font);
  params.append("max_font_size", max_font_size);
  params.append("boxes[0][text]", text1);
  params.append("boxes[1][text]", text2);
  params.append("boxes[2][text]", text3);
  params.append("boxes[3][text]", text4);
  const { body } = await snekfetch.post(`https://api.imgflip.com/caption_image?${params}`);
  return body.data.url;
}