module.exports = (string, length, endBy = " ") => {
  const x = string.substring(0, length).lastIndexOf(endBy);
  const pos = x === -1 ? length : x;
  return string.substring(0, pos);
};

module.exports.conf = { requiredModules: [] };
module.exports.help = {
  name: "splitText",
  type: "functions",
  description: "Find the last space of a string and cuts it down to a manageable size for use in Discord.",
};