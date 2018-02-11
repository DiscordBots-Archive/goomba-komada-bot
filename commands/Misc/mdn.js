const { MessageEmbed } = require('discord.js');
const snek = require('snekfetch');
const toMarkdown = require('to-markdown');
const mdnLink = 'https://developer.mozilla.org';
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    const query = args.join(' ').replace(/#/g, '.prototype.');
    try {
      const { body } = await snek
        .get('https://mdn.topkek.pw/search')
        .query({ q: query });

      if (!body.URL || !body.Title || !body.Summary) throw 'Could not find any results.';

      const embed = new MessageEmbed()
        .setColor(0x066FAD)
        .setAuthor('MDN', 'https://i.imgur.com/DFGXabG.png')
        .setURL(`${mdnLink}${body.URL}`)
        .setTitle(body.Title)
        .setDescription(toMarkdown(body.Summary, {
          converters: [{
            filter: 'a',
            replacement: (text, node) => `[${text}](${mdnLink}${node.href})`
          }]
        }));
      return message.channel.send(embed);
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }  
}

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "mdn",
  description: "Gets infos on a query on Mozilla Developer Network",
  usage: "<search:str>",
  usageDelim: "",
};