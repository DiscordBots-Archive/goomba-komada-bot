const { MessageEmbed } = require("discord.js")
exports.run = async (client, guild) => {
  if (guild.available) client.settings.guilds.create(guild).catch(e => client.emit("log", e, "error"));
  const channel = guild.channels.find("name", "general");
  const embed = new MessageEmbed()
        .setColor(4875195)
        .setAuthor("Goomba", guild.me.user.avatarURL({format: "png"}))
        .setDescription(`Thanks for adding me! My prefix is \`${guild.settings.prefix}\`.\nYou can see a list of my commands through \`${guild.settings.prefix}help\`, and you can change that and many other options through \`${guild.settings.prefix}conf\`.\nI hope you enjoy me!.`)
        .addField("Author", `My author is <@280399026749440000>.`);
  channel.send({embed})
}