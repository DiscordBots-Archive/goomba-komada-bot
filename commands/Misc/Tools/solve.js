const operate = (op, f, s) => {
  if (op == "+") {
    return f + s
  } else if (op == "-") {
    return f - s
  } else if (op == "*") {
    return f * s
  } else if (op == ":" || op == "/") {
    return f / s
  } else if (op == "^") {
    Math.pow(f, s)
  }
}
const { MessageAttachment, MessageEmbed } = require("discord.js");
exports.run = async (fridge, msg, [first, op, sec]) => {
  const embed = await new MessageEmbed()
      .setColor("0x2ECC71")
      .setTitle("Operation result")
      .setDescription(`${operate(op, first, sec)}`)
  return msg.channel.send({ embed })
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["math"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "solve",
  description: "Returns the result of a math expression.",
  usage: "<first_number:int> <operator:str> <second_number:int>",
  usageDelim: " ",
  type: "commands",
};