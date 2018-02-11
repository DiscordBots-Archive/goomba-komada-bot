const snek = require('snekfetch');
const { version: discordVersion, MessageEmbed } = require("discord.js");
exports.run = async (client, msg, args) => {
const { body } = await snek.get(`https://discordbots.org/api/bots/${client.user.id}/`);
    const embed = await new MessageEmbed()
      .setColor(msg.guild.me.roles.highest.color || 5198940)
      .setThumbnail(`https://cdn.discordapp.com/avatars/${body.clientid}/${body.avatar}.png`)
      .setTitle("Discord Bot List Information")
      .addField("ID", body.clientid, true)
      .addField("Username", body.username, true)
      .addField("Discriminator", body.discriminator, true)
      .addField("Short Description", body.shortdesc, true)
      .addField("Library", body.lib, true)
      .addField("Prefix", body.prefix, true)
      .addField("Upvotes", body.points, true)
      .addField("Server Count", body.server_count, true)
      .addField("Owner(s)", `<@${body.owners.join(">, <@")}>`, true)
      .addField("Links", `${body.invite.length !== 0 ? `[Invite](${body.invite}) | ` : ""}${body.website.length !== 0 ? `[Website](${body.website}) | ` : "" }${body.support.length !== 0 ? `[Support Server](https://discord.gg/${body.support})` : ""}`, true)
      .setTimestamp()
    msg.channel.send({ embed })
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["botinfo"],
  permLevel: 0,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "info",
  description: "Provides some details about the bot.",
  usage: "",
  usageDelim: "",
};