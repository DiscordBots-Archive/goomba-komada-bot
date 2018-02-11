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
  setInterval(() => {
    snekfetch.get(`https://discordbots.org/api/bots/407272032431112202/votes`)
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwNzI3MjAzMjQzMTExMjIwMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTE4MzQ2MjEzfQ.e1mg38YmmwXO61823mqbhA7P4_5NMm9DxmhX61b9BHc')
      .get({ server_count: client.guilds.size })
      .then(() => console.log('Updated discordbots.org stats.'))
      .catch(err => console.error(`Whoops something went wrong: ${err.body}`));
  }, 3600000)
}