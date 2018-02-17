const quiz = [
  { q: "What colour is the sky?", a: ["blue"] },
  { q: "Name a soft drink brand", a: ["pepsi", "coke", "rc", "7up", "mountain dew", "coca cola", "coca-cola", "sprite", "fanta"] },
  { q: "Name a programming language", a: ["actionscript", "coffeescript", "c", "c++", "c#", "basic", "python", "perl", "javascript", "dotnet", "lua", "crystal", "go", "d", "php", "ruby", "rust", "dart"] },
  { q: "Who's your favourite bot/server owner?", a: ["samplasion"] },
  { q: "Who's a good boy? **Who's a good boy???**", a: ["me", "i am"] },
  { q: "What lib is this bot programmed on?", a: ["discord.js", "komada"] },
  { q: "Who's the author/owner of the bot?", a: ["samplasion"] },
  { q: "Where is the bot hosted on?", a: ["glitch.com", "glitch"] },
  { q: "If A = B and C = B, is A = C?", a: ["yes", "yeah"] },
  { q: "What is the bot's token?", a: ["idk", "i don't know", "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0"] },
  { q: "What lib is this bot **not** programmed on?", a: ["dsharpplus", "no u"] },
  { q: "What is the square root of **fool**?", a: ["you", "u", "no u"] },
];

const options = {
  max: 1,
  time: 30000,
  errors: ["time"],
};

exports.run = async (client, msg) => {
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await msg.channel.send(item.q);
  try {
    const collected = await msg.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    await client.funcs.points(client, msg, winnerMessage.author.id, "add");
    return msg.channel.send(`We have a winner! *${winnerMessage.author.username}* had a right answer with \`${winnerMessage.content}\`!`);
  } catch (_) {
    return msg.channel.send("Seems no one got it! Oh well.");
  }
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: ["points"],
  requiredModules: [],
};

exports.help = {
  name: "quiz",
  description: "Sends a quiz and expects a correct answer.",
  usage: "",
  usageDelim: "",
  type: "commands",
};