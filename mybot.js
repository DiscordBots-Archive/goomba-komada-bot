const { Client } = require("komada");
const cfg = require("./config.js");
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const client = new Client({
  ownerID : "280399026749440000",
  prefix: "+",
  clientOptions: {
    fetchAllMembers: false,
  },
  cmdLogging: true,
});

client.logger = require(`./util/Logger`);

const Helpers = [];
const Admins = [];

client.login(process.env.TOKEN);