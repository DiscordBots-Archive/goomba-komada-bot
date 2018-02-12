exports.run = (client, msg, cmd) => {
  if (cmd.conf.cooldown === 0) return false;
  const cooldown = cmd.conf.cooldown || 2500;
  if (!cmd.cooldown) cmd.cooldown = new Map();
  const remaining = (cooldown - (Date.now() - cmd.cooldown.get(msg.author.id))) / 1000;
  if (cmd.cooldown.has(msg.author.id)) return `You are being ratelimited. Wait until ${remaining}s`;
  cmd.cooldown.set(msg.author.id, Date.now());
  setTimeout(() => cmd.cooldown.delete(msg.author.id), cooldown);
  return false;
};

exports.conf = {
  enabled: true,
  priority: 5,
};

exports.help = {
  name: "cooldown",
  type: "inhibitors",
  description: "[v2] Add per-command cooldown to single users.",
};