const snekfetch = require("snekfetch");
exports.run = (client, msg, args) => {
  /* args is an array of strings which corresponds to the message split by space, with the command removed. */
  /* example: `/test blah foo thing` , where `["blah", "foo", "thing"]` is the value of `args`. */
  snekfetch.post('http://random.cat/meow')
  .send({ usingGoodRequestLibrary: true })
  .then(r => msg.channel.send(`Here's your random cat: ${r.body.file}`)); // r.body is object from json response

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