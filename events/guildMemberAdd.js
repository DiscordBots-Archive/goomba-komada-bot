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
exports.run = (client, member) => {
    const message = member.guild.settings.welcomeMessage
      .replace("{{guild}}", member.guild.name)
      .replace("{{user}}", `<@${member.id}>`)
      .replace("{{num}}", `${member.guild.memberCount}${ord(member.guild.memberCount)}`);
    console.log(member.id);
    client.channels
      .get(member.guild.settings.welcomeChannel)
      .send(message)
      .catch(console.error);
};