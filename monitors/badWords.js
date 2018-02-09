exports.run = (client, msg) => {
  var bW = ["kys"]
  for (var i = 0, len = bW.length; i < len; ++i) {
    if (msg.content.toLowerCase().indexOf(bW[i]) != -1) {
      msg.delete()
      msg.reply("we don't like bad words, so please stop saying them.")
        .then(m => setTimeout(() => {m.delete()}, 2000));
    }
  }
}

exports.conf = {
   enabled: true,
   ignoreBots: true,
   ignoreSelf: true
 };