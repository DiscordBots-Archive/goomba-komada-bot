const exec = require("util").promisify(require("child_process").exec);
const { MessageAttachment, MessageEmbed } = require("discord.js");

exports.run = async (client, msg, [input]) => {
  const result = await exec(input).catch((err) => { throw err; });
  const prefix = msg.guild ? msg.guild.settings.prefix : "+"

  const output = result.stdout ? `**\`OUTPUT\`**${"```sh"}\n${result.stdout}\n${"```"}` : "";
  const outerr = result.stderr ? `**\`ERROR\`**${"```sh"}\n${result.stderr}\n${"```"}` : "";
  const output2 = result.stdout ? `${"```sh"}\n${result.stdout}\n${"```"}` : "```sh\ndone\n```";
  const outerr2 = result.stderr ? `${"```sh"}\n${result.stderr}\n${"```"}\n` : "";
  if (output2.length > 1024) {
    return msg.channel.send(new MessageAttachment(Buffer.from(output2), "output.txt"));
  }
  if (outerr2.length > 1024) {
    return msg.channel.send(new MessageAttachment(Buffer.from(outerr2), "outerr.txt"));
  }
  const embed = new MessageEmbed()
      .setColor("0x2ECC71")
      .setDescription(`${msg.author.username}, here are the results of the \`${prefix}exec\` command`)
      .setAuthor(msg.author.username, msg.author.avatarURL())
      .setTimestamp()
      .addField(":inbox_tray: **INPUT**", `\`\`\`sh\n${input}\n\`\`\``)
      .addField(":outbox_tray: **OUTPUT**", `${output2}\n${outerr2}`)
      .setFooter(`${prefix}exec`)
  return msg.channel.send(/*[output, outerr].join("\n")*/{ embed });
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["ex"],
  permLevel: 10,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "exec",
  description: "Execute commands in the terminal, use with EXTREME CAUTION.",
  usage: "<expression:str>",
  usageDelim: "",
  extendedHelp: "",
  type: "commands",
};
