const { get, post } = require("snekfetch");
const colors = [15386243, 5198940]
const roll = type => type[Math.floor(Math.random() * type.length)];
exports.run = async (client, msg, args) => {
  /* args is an array of strings which corresponds to the message split by space, with the command removed. */
  /* example: `/test blah foo thing` , where `["blah", "foo", "thing"]` is the value of `args`. */
  msg.channel.send(`${msg.author.displayName} is petting a birb...`).then(async m => {
    const { body } = get('https://random.birb.pw/tweet/')
     // r.body is object from json response
    await msg.edit({
      embed: {
        "title": "Click here if the image failed to load.",
        "url": `https://random.birb.pw/img/${body}`,
        "color": roll(colors),
        "image": {
          "url": `https://random.birb.pw/img/${body}`
        }
      }
    });
    // http://random.cat/meow
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