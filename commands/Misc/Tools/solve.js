const discord = require("discord.js");
var safeEval = require('safe-eval')
exports.run = async (client, msg, [code]) => {
  const message = msg;
  const prefix = msg.guild ? msg.guild.settings.prefix : "+";
  try{
    if (code.includes("eval(")) return msg.channel.send("You cannot use that.")
    const embed = new discord.MessageEmbed()
      .setColor(0x10ce66)
      .setDescription(`${message.author.username}, here are the results of the \`${prefix}solve\` command`)
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTimestamp()
      .addField(":inbox_tray: **INPUT**", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":outbox_tray: **OUTPUT**", `\`\`\`js\n${client.funcs.clean(client, safeEval(code))}\n\`\`\``)
      .setFooter(`${prefix}solve`)
    msg.channel.send(embed);
  } catch(e){
    console.log(e)
    return msg.channel.send("There was an error whilst solving your expression. Please `" + msg.guild ? msg.guild.settings.prefix : "+" + "report this bug:\n```\n" + msg.guild ? msg.guild.settings.prefix : "+" + "solve bug:\n" + e + "```.")
  }
}
/*var text = txt
  const { body } = await snek.post(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.YANDEX}&text=${encodeURIComponent(text)}&lang=${lng}`)
  if (body.code != 200) return msg.channel.send("An error occurred while translating `" + text + "`")
  console.log(body)
  var lang = body.lang.split("-")[0]
  if (lang == "en") {
    lang = "us"; // American?
  } else if (lang == "ko") {
    lang = "kr"; // 한국어요?
  }
  if (lng == "en") {
    lng = "us"; // American?
  } else if (lng == "ko") {
    lng = "kr"; // 한국어요?
  }*/
  /*const embed = new discord.MessageEmbed()
    .setTitle("Goomba Translator")
    .setColor(msg.guild.me.roles.highest.color || "0xb22222")
    .addField(`:flag_${lang}: **Original Text**`, text)
    .addField(`:flag_${lng}: **Translated Text**`, body.text)
  console.log(txt)*/
exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["maths","expr"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "solve",
  description: "Solves math expressions.",
  usage: "<math_expression:str>",
  usageDelim: "",
//extendedHelp: "Powered by Yandex.Translate"
};