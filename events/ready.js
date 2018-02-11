const snekfetch = require('snekfetch')
 exports.run = (client) => {
  snekfetch.post(`https://discordbots.org/api/bots/stats`)
    .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwNzI3MjAzMjQzMTExMjIwMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTE4MzQ2MjEzfQ.e1mg38YmmwXO61823mqbhA7P4_5NMm9DxmhX61b9BHc')
    .send({ server_count: client.guilds.size })
    .then(() => console.log('Updated discordbots.org stats.'))
    .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
  setInterval(() => {
    snekfetch.post(`https://discordbots.org/api/bots/stats`)
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwNzI3MjAzMjQzMTExMjIwMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTE4MzQ2MjEzfQ.e1mg38YmmwXO61823mqbhA7P4_5NMm9DxmhX61b9BHc')
      .send({ server_count: client.guilds.size })
      .then(() => console.log('Updated discordbots.org stats.'))
      .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
  }, 3600000)
  const activityMessages = [`Help for ${client.guilds.size} total guilds`, `Help for ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users`, `Help for ${client.channels.size.toLocaleString()} total channels`, `Type +help for a list of commands`];
  client.user.setActivity(activityMessages[1], {type: 0});
  setInterval(() => {
    let i = 2;
    client.user.setActivity(activityMessages[i], {type: 0});
    i++;
    if (i == activityMessages.length) i = 0;
  }, 300000)
}