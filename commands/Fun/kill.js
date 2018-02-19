exports.run = async (client, message, [mention]) => {
    Array.prototype.random = function() {
      return this[Math.floor(Math.random() * this.length)]
    };
    // if (message.mentions.members.size === 0) return message.reply("please mention a user to kill");
    let killed;
    if (mention.id == client.user.id) {
      killed = ["me", "I'm", "I", "me"]
    } else {
      const killVerb = mention + "'s";
      killed = [mention, killVerb, "he", "him"]
    }
    var arms = ["a 🔫 **gun**", "a 🍌 **banana**","a 📌 **pin**", "a 🎷 **sax**", "👊 **his hands**", "a 💣 **bomb**"];
    var killMethods = [`${message.author} killed ${killed[0]} with ${arms.random()}!`, `Turns out that ${killed[1]} dead because ${message.author} killed ${killed[3]} with ${arms.random()}!`];
    var suicideMethods = [`${message.author} killed himself with ${arms.random()}!`]
    if (mention.id == message.author.id) {
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
   usage: "[someone:user]",
   usageDelim: "",
 };