const request = require("snekfetch");
const discord = require("discord.js");

exports.run = async (client, msg, [search, resultNum = 0]) => {
  const url = `http://api.urbandictionary.com/v0/define?term=${search}`;
  const body = await request.get(url).then(data => JSON.parse(data.text));
  if (resultNum > 1) resultNum--;

  const result = body.list[resultNum];
  if (!result) return msg.channel.send("No entry found.");
  const wdef = result.definition.length > 1000
    ? `${client.funcs.splitText(result.definition, 1000)}...`
    : result.definition;
  const definition = [
    `**Word:** ${search}`,
    "",
    `**Definition:** ${resultNum + 1} out of ${body.list.length}\n_${wdef}_`,
    "",
    `**Example:**\n${result.example}`,
    `<${result.permalink}>`,
  ].join("\n");
  const embed = new discord.MessageEmbed()
    .setColor([29, 36, 57])
    .setThumbnail("https://burbcommunity-morethanthecurve.storage.googleapis.com/2013/09/urban-dictionary-logo.gif")
    .setTimestamp()
    .setAuthor(`Urban Dictionary: ${search}`, "https://burbcommunity-morethanthecurve.storage.googleapis.com/2013/09/urban-dictionary-logo.gif")
    .addField("**Definition**", `(_${resultNum + 1} out of ${body.list.length}_)\n${wdef}`)
    .addField("**Example**", `${result.example}`)
    .addField("**Upvotes**", result.thumbs_up, true)
    .addField("**Downvotes**", result.thumbs_down, true)
    .addField("**Author**", result.author)
    .setFooter(result.permalink, "https://burbcommunity-morethanthecurve.storage.googleapis.com/2013/09/urban-dictionary-logo.gif")

  return msg.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: ["splitText"],
  requiredModules: ["snekfetch", "discord.js"],
};

exports.help = {
  name: "urban",
  description: "Searches the Urban Dictionary library for a definition to the search term.",
  usage: "<search:str> [resultNum:int]",
  usageDelim: ", ",
  type: "commands",
};