const { MessageEmbed } = require("discord.js")
exports.run = async (client, guild) => {
  if (guild.available) client.settings.guilds.delete(guild).catch(e => client.emit("log", e, "error"));
}