const request = require("snekfetch");
const { parse } = require('sherlockjs');

exports.run = async (client, msg, [Time, reasn]) => {
  const reason = reasn;
	if (!validateTime(Time)) return msg.reply('seems like your Date is invalid!');
	const timeObject = parseTime(Time);
	const time = timeObject.startDate.getTime() - Date.now();
	msg.channel.send(`I will remind you of \`${clean(reason) ? clean(reason) : 'No reason'}\` in ${format(time / 1000)}`);
  client.timers.names.push(clean(reason) ? clean(reason) : 'No reason'); client.timers.times.push(format(time / 1000));
	setTimeout(() => {
    msg.author.send(`${msg.author} you wanted me to remind you: \`${clean(reason) ? clean(reason) : 'No reason'}\``)
    client.timers.names.pop(-1); client.timers.times.pop(-1);
  }, time);
};
exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["reminder","remind-me"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "timer",
  description: "Reminds you of something.",
  usage: "<time:str> <whatToRemindYou:str> [...]",
  usageDelim: ", ",
  type: "commands",
};


function parseTime(input) {
	const remindTime = parse(input);
	return remindTime;
}

function validateTime(input) {
	const remindTime = parse(input);
	if (!remindTime.startDate) return false;
	return true;
}

function clean(text) {
	if (typeof text === 'string') {
		return text.replace(/`/g, `\`${String.fromCharCode(8203)}`).replace(/@/g, `@${String.fromCharCode(8203)}`);
	} else {
		return text;
	}
}

function pad(seconds) {
	return (seconds < 10 ? '0' : '') + seconds;
}

function format(seconds) {
	let hours = Math.floor(seconds / (60 * 60));
	let minutes = Math.floor(seconds % (60 * 60) / 60);
	let seconds2 = Math.floor(seconds % 60);
	return `${pad(hours)}:${pad(minutes)}:${pad(seconds2)}`;
}