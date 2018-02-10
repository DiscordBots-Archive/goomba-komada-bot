const { js_beautify: beautify } = require('js-beautify');
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const messages = message.channel.messages.array().reverse().filter(msg => msg.author.id !== message.client.user.id);
    let code;
    const codeRegex = /```(?:js|json|javascript)?\n?((?:\n|.)+?)\n?```/ig;
    for (let m = 0; m < messages.length; m++) {
      const msg = messages[m];
      const groups = codeRegex.exec(msg.content);
      if (groups && groups[1] && groups[1].length) {
        code = groups[1];
        break;
      }
    }

    if (!code) {
      throw 'No JavaScript code blocks found.';
    }

    let beautifiedCode = beautify(code, { indent_size: 2, brace_style: 'none' });
    beautifiedCode = reduceIndentation(beautifiedCode);
    message.channel.send(`${'```js'}\n${beautifiedCode}\n${'```'}`);
  }

  function reduceIndentation(string) {
    let whitespace = string.match(/^(\s+)/);
    if (!whitespace) return string;
    whitespace = whitespace[0].replace('\n', '');
    const lines = string.split('\n');
    const reformattedLines = [];
    lines.forEach((line) => {
      reformattedLines.push(line.replace(whitespace, ''));
    });
    return reformattedLines.join('\n');
  }

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["beautifi", "beautyfy", "beautyfi"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "beautify",
  description: "Beautifies js code.",
  usage: "",
  usageDelim: "",
};