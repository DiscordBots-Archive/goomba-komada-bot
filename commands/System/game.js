exports.run = (bot, msg, [args, ...game]) => {
  let type = args;
  if (!args || args.size == 0) type = 0
  bot.user.setActivity(game.join(" "), {type: type});
}

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["setgame", "gameset"],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "game",
  description: "Sets the bot's presence.",
  usage: "<type:str> <game:str>",
  usageDelim: " ",
  extendedHelp: "",
  type: "commands",
};