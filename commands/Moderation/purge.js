const Discord = require("discord.js")
exports.run = async (client, message, args) => {
    await message.delete();
    const user = message.mentions.users.first();
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if (!amount) return message.channel.send('❎ | Sorry, but you must specify an amount to delete!');
    if (!amount && !user) return message.channel.send('❎ | Sorry, but you must specify a user and amount, or just an amount, of messages to purge!');
    if (amount >= 101) return message.channel.send('❎ | Sorry, but you cannot purge more than 100 messages.');
    message.channel.messages.fetch({
     limit: amount,
    }).then((messages) => {
     if (user) {
     const filterBy = user ? user.id : client.user.id;
     messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
     }
     message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });
    message.channel.send(`Correctly purged ${args[0]} messages`).then(m => setTimeout(async () => {m.delete()}), 1000)
};

exports.conf = {
   enabled: true,
   runIn: ["text", "group"],
   aliases: ["prune"],
   permLevel: 2,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
 };

exports.help = {
  name: 'purge',
  description: 'Purges (deletes) a given number of messages, excluding the command itself.',
  usage: '[messages:int|user:user] <messages:int>',
  usageDelim: " ",
  extendedHelp: `To use it, you must do the following:
-messages Deletes the given no. of messages
-@user messages Deletes the given no. of messages by the given user`
};