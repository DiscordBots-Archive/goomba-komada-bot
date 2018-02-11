const { inspect } = require("util");
const { MessageAttachment, MessageEmbed } = require("discord.js");

/* eslint-disable no-eval, consistent-return */
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
exports.run = async (client, message, [code]) => {
  const prefix = message.guild ? message.guild.settings.prefix : "+"
  try {
    let evaled = eval(code);
    if (evaled instanceof Promise) evaled = await evaled;
    if (typeof evaled !== "string") evaled = inspect(evaled, { depth: 0 });
    const output = client.funcs.clean(client, evaled);
    if (output.length > 1992) {
      return message.channel.send(new MessageAttachment(Buffer.from(output), "output.txt"));
    }
    const embed = new MessageEmbed()
      .setColor("0x2ECC71")
      .setDescription(`${message.author.username}, here are the results of the \`${prefix}eval\` command`)
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTimestamp()
      .addField(":inbox_tray: **INPUT**", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":outbox_tray: **OUTPUT**", `\`\`\`js\n${output}\n\`\`\``)
      .setFooter(`${prefix}eval`)
    return message.channel.send(/*"js", output*/{ embed });
  } catch (err) {
    /*const errorEmbed = new MessageEmbed()
      .setColor("0xE20D0D")
      .setDescription(`${message.author.username}, the \`${prefix}eval\` returned an error`)
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTimestamp()
      .addField(":inbox_tray: **INPUT**", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":outbox_tray: **OUTPUT**", `\`\`\`js\n${client.funcs.clean(client, err)}\n\`\`\``)
      .setFooter(`${prefix}eval`)*/
    /*const errorEmbed = {
      "description": `${message.author.username}, the \`${prefix}eval\` returned an error`,
      "color": 10682368,
      "timestamp": new Date(),
      "footer": {
        "text": `${prefix}`
      },
      "author": {
        "name": message.author.username,
        "icon_url": message.author.avatarURL()
      },
      "fields": [
        {
          "name": "inbox_tray: **INPUT**",
          "value": `\`\`\`js\n${code}\n\`\`\``
        },
        {
          "name": ":outbox_tray: **OUTPUT**",
          "value": `\`\`\`js\n${client.funcs.clean(client, err)}\n\`\`\``
        }
      ]
    };
    message.channel.send({ errorEmbed });*/
    message.channel.send(`\`ERROR\` \`\`\`js\n${client.funcs.clean(client, err)}\n\`\`\``);
    if (err.stack) client.emit("error", err.stack);
  }
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["ev"],
  permLevel: 10,
  botPerms: ["SEND_MESSAGES"],
  requiredFuncs: [],
  requiredSettings: [],
};

exports.help = {
  name: "eval",
  description: "Evaluates arbitrary Javascript. Reserved for bot owner.",
  usage: "<expression:str>",
  usageDelim: "",
};