exports.run = async (client, msg, args) => {
  if(args[0]>Number.MAX_SAFE_INTEGER) return msg.reply(`Hey, don't you mind they don't create ${args[0]}-sided dices?`);
  const upperBound = args[0] ? args[0] : 6;
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  return msg.reply(`🎲 The dice roll returned **${getRandomInt(1, upperBound)}**`).catch(console.error);
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["roll", "diceroll", "rolldice"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "dice",
  description: "Rolls a (semi)fair dice.",
  usage: "[upper_bound:int]",
  usageDelim: "",
};