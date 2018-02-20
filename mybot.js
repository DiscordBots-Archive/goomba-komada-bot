const { Client, PermLevels } = require("komada");
const { WebhookClient } = require("discord.js");
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

const DBL = require("dblapi.js");

const Helpers = [];
const Admins = ["413378420236615680"];

const permStructure = new PermLevels()
  .addLevel(0, false, () => true)
  .addLevel(2, false, (client, msg) => {
    if (!msg.guild || !msg.guild.settings.modRole) return false;
    const modRole = msg.guild.roles.get(msg.guild.settings.modRole);
    return modRole && msg.member.roles.has(modRole.id);
  })
  .addLevel(3, false, (client, msg) => {
    if (!msg.guild || !msg.guild.settings.adminRole) return false;
    const adminRole = msg.guild.roles.get(msg.guild.settings.adminRole);
    return adminRole && msg.member.roles.has(adminRole.id);
  })
  .addLevel(4, false, (client, msg) => msg.guild && msg.author.id === msg.guild.owner.id)
  .addLevel(8, false, (client, msg) => Admins.includes(msg.author.id))
  .addLevel(9, true, (client, msg) => msg.author.id === client.config.ownerID)
  .addLevel(10, false, (client, msg) => msg.author.id === client.config.ownerID);

const client = new Client({
  ownerID : "280399026749440000",
  prefix: "+",
  permStructure,
  clientOptions: {
    fetchAllMembers: true,
  },
  cmdLogging: true,
  console: {
    useColors: false,
  },
});

client.BugHook = new WebhookClient(process.env.BWH_ID, process.env.BWH_TOKEN);
client.FeatureHook = new WebhookClient(process.env.FWH_ID, process.env.FWH_TOKEN);

client.dbl = new DBL(process.env.APITOKEN, client);

client.logger = require(`./util/Logger`);

client.timers = {
  names: [],
  times: [],
}

client.version = "1.0a"

client.login(process.env.TOKEN);