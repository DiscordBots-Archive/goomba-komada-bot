const {
  MessageEmbed // or RichEmbed
} = require("discord.js");
exports.run = async (client, message) => {
  /*const embed = new MessageEmbed() // or RichEmbed
    .setColor(0xb22222)
    .setTitle(`Welcome ${message.author.username}!`)
    .setImage(message.author.avatarURL()) // or .setThumbnail()
    .setDescription(`Everybody say welcome to ${message.author}! Welcome in ${message.guild.name}!`)
  message.channel
    .send(embed)
    .catch(console.error);*/
  // This will create the webhook with the name "Example Webhook" and an example avatar.
  message.channel.createWebhook("Example Webhook", "https://i.imgur.com/p2qNFag.png")
    // This will actually set the webhooks avatar, as mentioned at the start of the guide.
    .then(webhook => webhook.edit("Example Webhook", "https://i.imgur.com/p2qNFag.png")
    // This will get the bot to DM you the webhook, if you use this in a selfbot,
    // change it to a console.log as you cannot DM yourself
    .then(wb => message.author.send(`Here is your webhook https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}`)).catch(console.error))
};
exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 10,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "test",
  description: "Test command.",
  usage: "",
  usageDelim: "",
};