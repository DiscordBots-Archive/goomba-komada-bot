exports.run = async (client, msg, [repeatnes]) => {
  msg.channel.send(`${repeatnes}`);
}

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["repeat","repeatwithme"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
  cooldown: 5000,
};

exports.help = {
  name: "say",
  description: "Repeats whatever you say",
  usage: "<whatToSay:str>",
  usageDelim: "",
  type: "commands",
};