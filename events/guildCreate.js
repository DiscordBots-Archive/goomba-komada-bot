const { MessageEmbed } = require("discord.js")
exports.run = (client, guild) => {
  const channel = guild.channels.find("name", "general");
  const embed = new MessageEmbed()
        .setColor(4875195)
        .setAuthor("Goomba", guild.me.user.avatarURL({format: "png"}))
        .setDescription(`Thanks for adding me! My prefix is \`${guild.settings.prefix}\`.\nYou can see a list of my commands through \`${guild.settings.prefix}help\`.\nI hope you enjoy me!.`)
        .addField("Author", `My author is <@280399026749440000>.`);
  channel.send({embed})
}