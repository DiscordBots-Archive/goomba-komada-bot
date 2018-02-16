const textanary = require("textanary");
exports.run = async (client, msg, [txt]) => {
  let hey = txt
  const check = str => {
    const num = /^[0-1]*$/gm;
    if (str.match(num)) {
     return true;
    }
    return false;
  }
  let bin;
  if (check(txt)) {
    bin = textanary({to: "text", data: hey});
  } else {
    bin = textanary({to: "binary", data: hey});
  }
  msg.channel.send(`\`\`\`${bin}\`\`\``)
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["bin"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: ["textanary"],
};

exports.help = {
  name: "binary",
  description: "Converts text to binary and vice-versa.",
  usage: "<text_to_convert:str>",
  usageDelim: "",
};