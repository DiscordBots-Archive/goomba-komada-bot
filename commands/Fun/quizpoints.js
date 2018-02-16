exports.run = async (client, msg) => await client.funcs.points(client, msg, msg.author.id, "get");

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["points"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: ["points"],
  requiredModules: [],
};

exports.help = {
  name: "quizpoints",
  description: "Play the quiz and earn points! Then use this to see your score.",
  usage: "",
  usageDelim: "",
  type: "commands",
};