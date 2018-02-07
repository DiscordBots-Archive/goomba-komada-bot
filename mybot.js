const komada = require("komada");
const cfg = require("./config.js");

const client = new komada.Client({
  ownerID : "280399026749440000",
  prefix: "+",
  clientOptions: {
    fetchAllMembers: false,
  },
  cmdLogging: true,
});

client.login(process.env.TOKEN);