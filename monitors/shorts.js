let shortcuts = {
  "lenny": "( ͡° ͜ʖ ͡°)",
  "shrug": "¯\\_(ツ)_/¯",
  "justright": "✋😩👌",
  "tableflip": "(╯°□°）╯︵ ┻━┻",
  "unflip": "┬──┬﻿ ノ( ゜-゜ノ)",
  "doubleflip": "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻"
};
const discord = require("discord.js");
let keys = Object.keys(shortcuts);
let values = Object.values(shortcuts);
exports.run = (client, msg) => {
  let prefix = msg.guild ? msg.guild.settings.prefix2 : "/"
  let i;
  for (i = 0; i < keys.length; i++) {
    if (msg.content.startsWith(prefix + keys[i])) {
      msg.channel.send(values[i])
    }
  }
  if (msg.content.startsWith(prefix + "help")) {
      const embed = new discord.MessageEmbed()
        .setColor("#FEDE58")
        .setTitle("**Help**")
        .addField(`${prefix}lenny`, "( ͡° ͜ʖ ͡°)")
        .addField(`${prefix}shrug`, "¯\\_(ツ)_/¯")
        .addField(`${prefix}justright`, "✋😩👌")
        .addField(`${prefix}tableflip`, "(╯°□°）╯︵ ┻━┻")
        .addField(`${prefix}unflip`, "┬──┬﻿ ノ( ゜-゜ノ)")
        .addField(`${prefix}doubleflip`, "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻")
        .setTimestamp()
      msg.channel.send(embed)
    }
}

exports.conf = {
   enabled: true,
   ignoreBots: true,
   ignoreSelf: true
 };