exports.run = async (client, message, args) => {
  if (message.author.id != client.config.ownerID) return message.reply("you don't have the permission to do so");
  await message.channel.send("**The bot is restarting**...");
  process.exit();
};

exports.conf = {
   enabled: true,
   runIn: ["text", "dm", "group"],
   aliases: ["exit", "quit"],
   permLevel: 10,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
 };

exports.help = {
   name: "restart",
   description: "Restarts the bot.",
   usage: "",
   usageDelim: "",
 };