const { MessageEmbed } = require('discord.js');
const snek = require('snekfetch');
exports.run = async (client, message, args) => {
    const query = args.join(' ');
    try {
      const { body } = await snek.get(`https://registry.npmjs.com/${query}`);
      // Get the latest version by the dist-tags.
      const version = body.versions[body['dist-tags'].latest];
      // Get and check for any dependencies.
      let deps = version.dependencies ? Object.keys(version.dependencies) : null;
      // Grab the list of maintainers.
      let maintainers = body.maintainers.map(user => user.name);

      // If there's more than 10 maintainers, we want to truncate them down.
      if (maintainers.length > 10) {
        const len = maintainers.length - 10;
        maintainers = maintainers.slice(0, 10);
        maintainers.push(`...${len} more.`);
      }

      // Same with the dependencies.
      if (deps && deps.length > 10) {
        const len = deps.length - 10;
        deps = deps.slice(0, 10);
        deps.push(`...${len} more.`);
      }
      // Now we just need to present the data to the end user.
      const embed = new MessageEmbed()
        .setColor(0xCB0000)
        .setAuthor(body.name, 'https://i.imgur.com/ErKf5Y0.png')
        .setDescription(`${body.description || 'No description.'}
**Version:** ${body['dist-tags'].latest}
**License:** ${body.license}
**Author:** ${body.author ? body.author.name : 'Unknown'}
**Modified:** ${new Date(body.time.modified).toDateString()}
**Dependencies:** ${deps && deps.length ? deps.join(', ') : 'None'}
**Download:** [${body.name}](https://www.npmjs.com/package/${query})`);
      
      message.channel.send({embed});
    } catch (err) {
      if (err.status === 404) throw 'Could not find any results.';
      console.log(err);
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
  name: "npm",
  description: "Gets infos on a npm package",
  usage: "<search:str>",
  usageDelim: "",
  type: "commands",
};