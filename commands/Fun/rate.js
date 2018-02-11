const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

exports.run = (client, message, [...whatToRateRaw]) => {
    var whatToRate = whatToRateRaw.join(" ");
    if (!whatToRate) return message.reply("please say **something** to rate.");
    message.channel.send(`🎰 | I would rate ${whatToRate} ${rand(0, 10)}/10!`).catch(console.error);
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["r8"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "rate",
  description: "Rates something",
  usage: "<rated:str>",
  usageDelim: "",
};