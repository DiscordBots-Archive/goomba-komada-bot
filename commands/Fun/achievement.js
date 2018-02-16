const snekfetch = require('snekfetch');
exports.run = async (client, msg, [title, contents]) => {
  if(!contents) {
    [title, contents] = ["Achievement Get!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(contents.toLowerCase().includes("burn") || title.toLowerCase().includes("burn")) rnd = 38;
  if(contents.toLowerCase().includes("cookie") || title.toLowerCase().includes("cookie")) rnd = 21;
  if(contents.toLowerCase().includes("cake") || title.toLowerCase().includes("cake")) rnd = 10;
  
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>msg.channel.send("", {files:[{attachment: r.body}]}));

};

exports.conf = {
   enabled: true,
   runIn: ["text", "dm", "group"],
   aliases: ["mca"],
   permLevel: 0,
   botPerms: [],
   requiredFuncs: [],
   requiredSettings: [],
 };

exports.help = {
   name: "achievement",
   description: "Sends a Minecraft Achievement image.",
   usage: "<title:str{1,22}> [subtitle:str{1,22}]",
   usageDelim: "|",
 };