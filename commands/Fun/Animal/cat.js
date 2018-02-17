const snekfetch = require("snekfetch");
exports.run = async (client, msg, args) => {
  const colors = [15386243, 5198940]
  const roll = type => type[Math.floor(Math.random() * type.length)];
  /* args is an array of strings which corresponds to the message split by space, with the command removed. */
  /* example: `/test blah foo thing` , where `["blah", "foo", "thing"]` is the value of `args`. */
  msg.channel.send(`${msg.author.username} is petting a cat...`).then(async m => {
    const req = snekfetch.post('http://random.cat/meow')
      .send({ usingGoodRequestLibrary: true })
      .then(async r => {
      await m.edit({
        embed: {
          "url": `${r.body.file}`,
          "color": roll(colors),
          "image": {
            "url": `${r.body.file}`
          }
        }
      });
      // http://random.cat/meow
    })
  });

  // http://random.cat/meow
};

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
   name: "cat",
   description: "Sends a random image of a cat.",
   usage: "",
   usageDelim: "",
 };