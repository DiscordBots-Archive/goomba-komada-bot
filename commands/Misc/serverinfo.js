const { MessageEmbed, Collection } = require("discord.js");
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
exports.run = (client, msg, args) => {
  const embed = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setColor(randomColor)
    .setThumbnail(msg.guild.iconURL())
    .addField("**Server ID**", msg.guild.id, true)
    .addField("**Server Name**", `${msg.guild.name} (${msg.guild.nameAcronym})`, true)
    .addField("**Owner**", msg.guild.owner.user.tag, true)
    .addField("**Region**", msg.guild.region, true)
    .addField("**Members**", `${msg.guild.memberCount}`, true)
    .addField("**Bot members**", msg.guild.members.filter(m=>m.user.bot).size, true)
    .addField("**Non-bot members**", msg.guild.memberCount - msg.guild.members.filter(m=>m.user.bot).size, true)
    .addField("**Roles**", `${msg.guild.roles.map(g=>`- \`${g.name}\``).sort().join('\n')}`, true)
    .addField("**Emojis**", msg.guild.emojis.map(e => ` ${e.toString()}`).join(''), true)
  msg.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  aliases: ["serverstats","server",'guildinfo','guildstats'],
  permLevel: 10,
  runIn: ["text", "group"],
  botPerms: [],
  requiredFuncs: [],
  requiredModules: []
};

exports.help = {
  name: 'serverinfo',
  description: 'Gets server info.',
  usage: '',
  usageDelim: ""
};