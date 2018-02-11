exports.run = (client, member) => {
    const message = member.guild.settings.goodbyeMessage
      .replace("{{user}}", `<@${member.id}>`)
      .replace("{{num}}", `${member.guild.memberCount}`);
    console.log(member.id);
    client.channels
      .get(member.guild.settings.welcomeChannel)
      .send(message)
      .catch(console.error);
};