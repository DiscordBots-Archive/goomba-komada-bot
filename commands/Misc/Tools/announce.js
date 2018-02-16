exports.run = async (client, msg, [args]) => {
  client.channels
      .get(msg.guild.settings.announcements)
      .send(args)
  msg.channel.send(":white_check_mark: | Announcement sent.")
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["ann","announcements",],
  permLevel: 4,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "announce",
  description: "Announces something in the \"announcements\" channel defined in the per-guild config.",
  usage: "<announce:str{1,2000}>",
  usageDelim: "",
};