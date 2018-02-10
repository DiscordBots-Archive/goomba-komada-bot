exports.run = async (client, msg, [member, days = 1, ...reason]) => {
  await msg.guild.ban(member, days);
  await msg.guild.unban(member);
  const reasn = reason ? reason.join(" ") : "No reason"
  const modlog = msg.guild.settings.modLogChannel
  return modlog.send("**" + member.user.tag + "** was softbanned. Reason: " + reasn)
  return msg.channel.send(`${member.tag} was softbanned.`);
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
  name: "softban",
  description: "Softbans a mentioned user.",
  usage: "<member:member> [days:int{1,7}] [reason:str]",
  usageDelim: " ",
};