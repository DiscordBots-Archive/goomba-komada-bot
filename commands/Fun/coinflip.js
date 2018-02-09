const snekfetch = require("snekfetch");
exports.run = async (client, msg, arg) => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const coin = getRandomInt(0, 1)
  msg.reply(coin==0?`🎰 The coin gave **heads**`:`🎰 The coin gave **tails**`);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["coin", "flip", "flipcoin"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "coinflip",
  description: "Flips a coin",
  usage: "",
  usageDelim: "",
};