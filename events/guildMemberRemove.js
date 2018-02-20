exports.run = (client, member) => {
  if (member.guild.settings.welcOn) {
    const message = member.guild.settings.goodbyeMessage
      .replace("{{user}}", `${member.user.username}`)
      .replace("{{num}}", `${member.guild.memberCount}`);
    client.channels
      .get(member.guild.settings.welcomeChannel)
      .send(message)
      .catch(console.error);
  }
};