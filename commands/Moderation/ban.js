exports.run = async (client, msg, [member, ...reason]) => {
  await msg.guild.ban(member);
  let reasn = reason || reason != "" ? reason.join(" ") : "No reason."
  const modlog = client.channels.get(msg.guild.settings.modLogChannel)
  modlog.send("**" + member.user.tag + "** was banned. Reason: " + reasn)
  return msg.channel.send(`${member.user.tag} was banned.`);
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text"],
  aliases: [],
  permLevel: 3,
  botPerms: ["BAN_MEMBERS"],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "ban",
  description: "Bans a mentioned user.",
  usage: "<member:member> <reason:str>",
  usageDelim: " ",
  type: "commands",
};