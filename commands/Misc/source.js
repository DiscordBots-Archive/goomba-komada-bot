exports.run = (client, msg, args) => {
  const replyTo = args[0];
  msg.channel.messages.fetch({limit: 1, around: replyTo})
  .then(messages=> {
    const replyToMsg = messages.first();
    msg.channel.send(`Source Code for MSG ID ${replyToMsg}: \`\`\`md\n${clean(replyTo.content)}\n\`\`\``);
  }).catch(console.error);
};

exports.conf = {
  enabled: true,
  aliases: ["src"],
  permLevel: 10,
  runIn: ["text", "group"],
  botPerms: ["MANAGE_MESSAGES"],
  requiredFuncs: [],
  requiredModules: []
};

exports.help = {
  name: 'source',
  description: 'Gets the markdown source of the specified message ID in the same channel.',
  usage: '<message_ID:msg>',
  usageDelim: ""
};

function clean(text) {
  if (typeof(text) === "string") {
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  }
  else {
      return text;
  }
}