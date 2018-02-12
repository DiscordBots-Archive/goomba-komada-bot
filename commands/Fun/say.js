exports.run = (client, msg, [repeatness]) => msg.channel.send(`${repeatness} (Requested by ${msg.author.username})`);

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["repeat","repeatwithme"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "say",
  description: "Repeats whatever you say",
  usage: "<whatToSay:str>",
  usageDelim: "",
  type: "commands",
};