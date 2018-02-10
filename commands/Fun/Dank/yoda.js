const request = require("snekfetch");
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  try {
    const speech = args.join(" ");
    if (speech.length < 2) {
      message.reply("Invalid command usage, you must supply text for Yoda. Yes.");
      return;
    }
    const { text } = await request.get(`http://yoda-api.appspot.com/api/v1/yodish?text=${encodeURIComponent(speech.toLowerCase())}`);
    message.channel.send(JSON.parse(text).yodish);
  } catch (error) {
    client.logger.error(error);
  }
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredSettings: [],
  requiredModules: ["snekfetch"],
};

exports.help = {
  name: "yoda",
  description: "Transforms any text in yoda speech (results may vary).",
  usage: "<text:str{2,100}>",
  usageDelim: "",
};