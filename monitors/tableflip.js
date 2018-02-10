exports.run = (client, msg) => {
  if (msg.content == "(╯°□°）╯︵ ┻━┻" || msg.content == "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻") return msg.channel.send("┬──┬﻿ ノ( ゜-゜ノ)");
}

exports.conf = {
   enabled: true,
   ignoreBots: true,
   ignoreSelf: true
 };