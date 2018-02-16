const discord = require("discord.js");
const translate = require('google-translate-api');
exports.run = async (client, msg, args) => {
  const [lang, ...txt] = await args;
  const string = String(txt)
  try{
    await translate(/*"Hello world"*/string, { to: lang }).then(translation => {
      const embed = new discord.MessageEmbed()
        .setTitle("Goomba Translator")
        .setColor(msg.guild.me.roles.highest.color || "0xb22222")
        .addField(`:flag_${translation.from.language.iso == "en" ? "us" : translation.from.language.iso == "ko" ? "kr" : translation.from.language.iso}: **Original Text**`, txt)
        .addField(`:flag_${lang == "en" ? "us" : lang == "ko" ? "kr" : lang}: **Translated Text**`, translation.text)
      msg.channel.send(embed);
    });
  } catch(e){
    console.log(e)
    msg.channel.send("There was an error whilst translating your text. Be sure you entered correctly the language. (List of supported languages: http://how.evie-banned.me/ezuguwinoy.scala)")
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
  aliases: ["t","trans"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "translate",
  description: "Translates the given text in the given language.",
  usage: "<langTo:str> <text:str>",
  usageDelim: "|",
//extendedHelp: "Powered by Yandex.Translate"
};