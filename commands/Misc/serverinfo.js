const { MessageEmbed, Collection } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
var color = require('dominant-color');
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
exports.run = async (client, msg, args) => {
  const command = args[0] ? args[0].toLowerCase() : "";
  switch (command) {
    case "emoji":
    case "emojis" :
      msg.channel.send(`**Guild emojis**: ${msg.guild.emojis.map(e => `${e.toString()}`).join(' ')}`)
      break;
    case "role":
    case"roles" :
      msg.channel.send(`**Guild roles**:\n${msg.guild.roles.map(g=>`- \`${g.name} (${g.id})\``).sort().join('\n')}`)
      break;
    default :
      let emojis = 0, roles = 0;
      msg.guild.roles.forEach(g=>{
        roles += 1
      });
      msg.guild.emojis.forEach(g=>{
        emojis += 1
      });
      const embed = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setColor(randomColor)
        .setThumbnail(msg.guild.iconURL())
        .addField("**Server ID**", msg.guild.id, true)
        .addField("**Server Name**", `${msg.guild.name} (${msg.guild.nameAcronym})`, true)
        .addField("**Verification level**", `${msg.guild.verificationLevel}`, true)
        .addField("**Owner**", msg.guild.owner.user.tag, true)
        .addField("**Region**", msg.guild.region, true)
        .addField("**Members**", `${msg.guild.memberCount}`, true)
        .addField("**Bot members**", msg.guild.members.filter(m=>m.user.bot).size, true)
        .addField("**Non-bot members**", msg.guild.memberCount - msg.guild.members.filter(m=>m.user.bot).size, true)
        .addField("**Large**", `${msg.guild.large ? "Yes" : "No"}`, true)
        .addField("**Roles**", `${roles}`, true)
        .addField("**Emojis**", emojis, true)
        .addField("**Created at**", `${moment.utc(msg.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
      msg.channel.send({ embed });
  }
};

exports.conf = {
  enabled: true,
  aliases: ["serverstats","server",'guildinfo','guildstats'],
  permLevel: 0,
  runIn: ["text", "group"],
  botPerms: [],
  requiredFuncs: [],
  requiredModules: []
};

exports.help = {
  name: 'serverinfo',
  description: 'Gets server info.',
  usage: '[command:str]',
  usageDelim: "",
  extendedHelp: "-emojis Shows server emojis\n-roles  Shows server roles"
};