exports.run = async (client, msg, [member, ...reason]) => {
  await member.kick();
  let reasn
  if (reason[0] == "") {
    reasn = "No reason."
  } else {
    reasn = reason.join(" ")
  }
  const modlog = client.channels.get(msg.guild.settings.modLogChannel)
  modlog.send("**" + member.user.tag + "** was kicked. Reason: " + reasn)
  return msg.channel.send(`${member.user.tag} was kicked.`);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text"],
  aliases: ["k"],
  permLevel: 2,
  botPerms: ["KICK_MEMBERS"],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "kick",
  description: "Kicks a mentioned user.",
  usage: "<member:member> <reason:str>",
  usageDelim: " ",
  type: "commands",
};