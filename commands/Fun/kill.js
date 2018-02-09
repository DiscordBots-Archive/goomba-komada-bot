exports.run = (client, message, mention) => {
    Array.prototype.random = function() {
      return this[Math.floor(Math.random() * this.length)]
    };
    if (message.mentions.members.size === 0) return message.reply("please mention a user to kill");
    let killed;
    if (message.mentions.members.first().id == client.user.id) {
      killed = ["me", "I'm", "I", "me"]
    } else {
      const killVerb = message.mentions.members.first() + "'s";
      killed = [message.mentions.members.first(), killVerb, "he", "him"]
    }
    var arms = ["a 🔫 **gun**", "a 🍌 **banana**","a 📌 **pin**", "a 🎷 **sax**", "👊 **his hands**", "a 💣 **bomb**"];
    var killMethods = [`${message.author} killed ${killed} with ${arms.random()}!`, `Turns out that ${killed[1]} dead because ${message.author} killed ${killed[3]} with ${arms.random()}!`];
    var suicideMethods = [`${message.author} killed himself with ${arms.random()}!`]
    if (message.mentions.members.first().id == message.author.id) {
      message.channel.send(`❎ | Do you really want to suicide? Ok then... ${suicideMethods.random()}!`).catch(console.error);
    } else {
      message.channel.send(`✅ | ${killMethods.random()}!`).catch(console.error);
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
   name: "kill",
   description: "Kills someone.",
   usage: "[someone:mention]",
   usageDelim: "",
 };