let shortcuts = {
  "lenny": "( ͡° ͜ʖ ͡°)",
  "shrug": "¯\\_(ツ)_/¯",
  "justright": "✋😩👌",
  "tableflip": "(╯°□°）╯︵ ┻━┻",
  "unflip": "┬──┬﻿ ノ( ゜-゜ノ)",
  "doubleflip": "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻"
}
let keys = Object.keys(shortcuts);
let values = Object.values(shortcuts)
let prefix = "/"
exports.run = (client, msg) => {
  let i;
  for (i = 0; i < keys.length; i++) {
    if (msg.content.startsWith(prefix + keys[i])) {
      msg.channel.send(values[i])
    }
  }
}

exports.conf = {
   enabled: true,
   ignoreBots: true,
   ignoreSelf: true
 };