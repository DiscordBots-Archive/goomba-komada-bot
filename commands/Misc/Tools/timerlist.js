const request = require("snekfetch");
const { parse } = require('sherlockjs');

exports.run = async (client, msg) => {
  const msgs = [
    "Here are listed all the set timers."
  ]
  for (var i = 0; i < client.timers.names.length; i++) {
    msgs.push(`\`${client.timers.names[i]}\`: ${client.timers.times[i]}`)
  }
  if(msgs[1] == undefined || msgs[1] == "") msgs[1] = "No set timers."
  msg.channel.send(msgs.join("\n"))
};
exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["reminders","remind-me-list","timers"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "timerlist",
  description: "What did you forgot? 😉",
  usage: "",
  usageDelim: "",
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

function format(seconds) {
	const { pad } = this;
	let hours = Math.floor(seconds / (60 * 60));
	let minutes = Math.floor(seconds % (60 * 60) / 60);
	let seconds2 = Math.floor(seconds % 60);
	return `${pad(hours)}:${pad(minutes)}:${pad(seconds2)}`;
}

function pad(seconds) {
	return (seconds < 10 ? '0' : '') + seconds;
}