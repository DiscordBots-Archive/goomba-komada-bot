exports.run = async (client, msg, [user, amount]) => {
  msg.channel.messages.fetch({
    limit: amount,
  }).then((messages) => {
    if (user) {
      const filterBy = user ? user.id : client.user.id;
      messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
    }
    msg.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    const modlog = msg.guild.settings.modLogChannel
    return modlog.send(`A message purge just happened in <#${msg.channel.id}>`)
  });
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  selfbot: false,
  aliases: [],
  permLevel: 0,
  botPerms: ["MANAGE_MESSAGES"],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: 'purge',
  description: 'Purges (deletes) a given number of messages, excluding the command itself.',
  usage: "[user:mention] <amount:int{2,100}>",
  usageDelim: " ",
  type: "commands",
};