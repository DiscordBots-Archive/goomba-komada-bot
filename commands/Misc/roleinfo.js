const { MessageEmbed, Collection } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
exports.run = (client, msg, [role]) => {
  let members = 0;
  role.members.forEach(g=>{
    members += 1
  });
  const memberList = role.members.map(member => `- \`${member.displayName}\``).sort()//.join("\n")
  var memberListString;
  if (memberList.length > 45) {
    const len = memberList.length - 45;
    memberListString = memberList.slice(0, 45);
    memberListString.push(`...${len} more.`);
    memberListString = memberListString.join("\n");
    console.log(len)
  }
  role.members.map(member => `- \`${member.displayName}\``)//.join("\n")
  const embed = new MessageEmbed()
    .setTitle(`${role.name} Role Info`)
    .setAuthor(client.user.username, client.user.avatarURL())
    .setColor(`${role.hexColor == "#000000" ? randomColor : role.hexColor}`)
    .setThumbnail(msg.guild.iconURL())
    .addField("**Role ID**", role.id, true)
    .addField("**Role Name**", `${role}`, true)
    .addField("**Members**", `${memberListString == undefined ? "No members." : memberListString}`, true)
    .addField("**Sep. Category**", role.hoist ? "Role members **__are__** shown in a separate category in the users list" : "Role members **__are not__** shown in a separate category in the users list")
    .addField("**Members**", `${members}`, true)
    .addField("**Bot members**", role.members.filter(m => m.user.bot).size, true)
    .addField("**Non-bot members**", members - role.members.filter(m => m.user.bot).size, true)
    .addField("**Position**", `#${role.position}`, true)
    .addField("**Created at**", `${moment.utc(role.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
  console.log(role.hexColor)
  msg.channel.send({
    embed
  });
};

exports.conf = {
  enabled: true,
  aliases: ["rolestats","role",'roles','rolesinfo'],
  permLevel: 0,
  runIn: ["text", "group"],
  botPerms: [],
  requiredFuncs: [],
  requiredModules: []
};

exports.help = {
  name: 'roleinfo',
  description: 'Gets role info.',
  usage: '<role:role>',
  usageDelim: "",
};