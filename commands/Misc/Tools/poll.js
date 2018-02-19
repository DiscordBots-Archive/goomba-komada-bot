const request = require("snekfetch");
const { parse } = require('sherlockjs');
const { MessageEmbed: RichEmbed, Collection } = require("discord.js");

const emojiValues = {
	1: '1⃣',
	2: '2⃣',
	3: '3⃣',
	4: '4⃣',
	5: '5⃣',
	6: '6⃣',
	7: '7⃣',
	8: '8⃣',
	9: '9⃣',
	10: '🔟'
};

exports.run = async (client, msg, [Taim, title, ...options]) => {
		const collection = createCollection(options, emojiValues);
	const timeObject = parseTime(Taim);
	const time = timeObject.startDate.getTime() - Date.now();

		const embed = new RichEmbed()
			.setAuthor(msg.author.username, msg.author.avatarURL())
			.setTitle('New poll by ' + msg.author.username)
      .setDescription("**" + title + "**")
			.setColor('#4286f4')
			.addField('Options', collection.map(object => `${object.emoji} **|** ${object.option}`).join('\n'))

		const sent = await msg.channel.send({ embed });

		sent.awaitReactions((reaction, user) => {
			if (!collection.exists('emoji', reaction.emoji.name) || user.bot) return false;
			return true;
		}, {
			time,
			errors: ['time']
		}).catch(async reactions => {
			reactions = reactions.sort((a, b) => a.count - b.count);
			const firstReaction = reactions.first();
			if (reactions.size === 0) {
				const editEmbed = new RichEmbed()
			    .setAuthor(msg.author.username, msg.author.avatarURL())
					.setColor('#d6152f')
					.setTitle('Poll Closed!')
          .setDescription("**" + title + "**")
					.addField('Result:', `Nobody voted so no option won!`);
				return sent.edit({ embed: editEmbed });
			}
			if (reactions.some(reaction => {
				if (reaction.emoji.name === firstReaction.emoji.name) return false;
				if (reaction.count === firstReaction.count) return true;
				return false;
			})) {
				const editEmbed = new RichEmbed()
			    .setAuthor(msg.author.username, msg.author.avatarURL())
					.setColor('#d6152f')
					.setTitle('Poll Closed!')
          .setDescription("**" + title + "**")
					.addField('Result:', `Mutiple options won:\n${getWinnerReactions(reactions, collection).map(val => val.option).join('\n')}`);
				await sent.edit({ embed: editEmbed });
			} else {
				const editEmbed = new RichEmbed()
			    .setAuthor(msg.author.username, msg.author.avatarURL())
					.setColor('#d6152f')
					.setTitle('Poll Closed!')
          .setDescription("**" + title + "**")
					.addField('Result:', `${collection.find('emoji', reactions.first().emoji.name).option}`);
				await sent.edit({ embed: editEmbed });
			}
		});
		const emojis = collection.map(object => object.emoji);
		for (let i = 0; i < emojis.length; i++) {
			await sent.react(emojis[i]); // eslint-disable-line no-await-in-loop
		}
	}

function	getWinnerReactions(reactions, optionCollection) {
	const winnerEmojis = reactions.filter(reaction => reaction.count === reactions.first().count).map(reaction => reaction.emoji.name);
	return optionCollection.filter(val => winnerEmojis.includes(val.emoji));
}

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "poll",
  description: "Creates a poll.",
  usage: "<time:str> <title:str> <options:str> [...]",
  usageDelim: ", ",
  type: "commands",
};

function parseTime(input) {
	const remindTime = parse(input);
	return remindTime;
}

function createCollection(array, emojiValues) {
	const iterable = [];
	for (let i = 0; i < array.length; i++) {
		const key = i + 1;
		iterable.push([key, { emoji: emojiValues[key], option: array[i] }]);
	}
	return new Collection(iterable);
}