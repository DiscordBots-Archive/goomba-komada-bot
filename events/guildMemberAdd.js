const ord = number => {
  let or;
  const num = number.toString()
  if (num.endsWith("1")) {
    or = "st"
  } else if (num.endsWith("2")) {
    or = "nd"
  } else if (num.endsWith("3")) {
    or = "rd"
  } else {
    or = "th"
  }
  return or;
}
const { MessageEmbed } = require("discord.js");
exports.run = (client, member) => {
  if (member.guild.settings.welcOn) {
    const message = member.guild.settings ? member.guild.settings.welcomeMessage.replace("{{guild}}", member.guild.name).replace("{{user}}", `${member.user.tag}`).replace("{{num}}", `${member.guild.memberCount}${ord(member.guild.memberCount)}`) : "Hello!";
    const embed = new MessageEmbed()
    client.channels
      .get(member.guild.settings.welcomeChannel)
      .send(message)
      .catch(console.error);
  }
};