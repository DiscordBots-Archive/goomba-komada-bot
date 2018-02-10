const fsn = require("fs-nextra");

const alternateCase = (string) => {
  const chars = string.toUpperCase().split("");
  for (let i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toLowerCase();
  }
  return chars.join("");
};

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars 
    try {
      const grabMock = await message.channel.messages.fetch({ limit:1, before: message.id});
      // const mockBob = await fsn.readFile("https://github.com/YorkAARGH/Misaki/raw/master/assets/images/spongebob.png");
      const mock = grabMock.size === 1 ? grabMock.first() : grabMock;
      if (mock.author.bot) return message.reply("You cannot mock bots.");
      await message.channel.send(alternateCase(mock.cleanContent)/*, {files: [{attachment: mockBob, name: "mock.png"}]}*/);
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
 };

exports.help = {
   name: "mock",
   description: "MoCkS A MeSsAgE.",
   usage: "[msg:msg]",
   usageDelim: "",
 };