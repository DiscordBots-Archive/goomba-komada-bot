exports.run = async (client, message, args) => {
  message.author.send(`${client.guilds.map(g=>`${g.name} (${g.id})`).join('\n')}`, {code: "xl"});
  message.sendMessage("📥 | Guilds have been sent to your DMs.");
};

exports.conf = {
   enabled: true,
   runIn: ["text", "dm", "group"],
   aliases: ["servers"],
   permLevel: 10,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
 };

exports.help = {
  name: "guilds",
  description: "Returns a list of guild names & IDs where the bot is in separated by a line return.",
  usage: "",
  usageDelim: ""
};