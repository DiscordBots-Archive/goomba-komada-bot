const snekfetch = require("snekfetch");
const colors = [15386243, 5198940]
const roll = type => type[Math.floor(Math.random() * type.length)];
exports.run = async (client, msg, args) => {
  const color = roll(colors)
  /* args is an array of strings which corresponds to the message split by space, with the command removed. */
  /* example: `/test blah foo thing` , where `["blah", "foo", "thing"]` is the value of `args`. */
  msg.channel.send(`${msg.author} is petting a birb...`).then(async m => {
    const req = snekfetch.get('https://random.birb.pw/tweet/')
      .send({ usingGoodRequestLibrary: true })
      .then(async r => {
      await m.edit({
        embed: {
          "title": "Click here if the image failed to load.",
          "url": `https://random.birb.pw/img/${r.body}`,
          "color": color,
          "image": {
            "url": `https://random.birb.pw/img/${r.body}`
          }
        }
      });
      // http://random.cat/meow
    })
  });
};

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
  name: "birb",
  description: "Sends a random image of a birb.",
  usage: "",
  usageDelim: "",
};