const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  
  await message.channel.messages.fetch({around: args[0], limit: 1})
  .then(messaged => {
    const messages = messaged.first();
    const embed = new Discord.MessageEmbed()
      .setColor(4870738)
      .setThumbnail(`${messages.author.avatarURL()}`)
      .setAuthor(`By ${messages.author.tag} (${messages.author.id})`, `${messages.author.avatarURL()}`)
      .addField("**Message content:**", `${messages.content}`, true);
    message.channel.send({embed})
  });
};

exports.conf = {
   enabled: true,
   runIn: ["text", "group"],
   aliases: [],
   permLevel: 0,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
 };

exports.help = {
  name: 'quote',
  description: 'Quote someone without pinging them.',
  usage: '[id:str]',
  usageDelim: ""
};