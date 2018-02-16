var weather = require('weather-js');
const { MessageEmbed: msgmb } = require("discord.js");
exports.run = async (client, msg, [city, dgTp]) => {
  weather.find({search: city, degreeType: dgTp ? dgTp : "c"}, async function(err, result) {
  if(err) console.log(err);
 /*
  console.log(JSON.stringify(result, null, 2));
    const res = result
    const embed = new msgmb()
      .setTitle(`Weather for **__${res.location.name}__**.`)
      .setDescription(`Lat.: ${res.location.lat}; Long.: ${res.location.long}`)
      .addField("", ``, true)
      .addField("", ``, true)
      .addField("", ``, true)
      .addField("", ``, true)
      .addField("", ``, true)
      .addField("", ``, true)
      .addField("", ``, true)
      .addField("", ``, true)
      .addField("", ``, true)
      .addField("", ``, true)*/
  // We also want them to know if a place they enter is invalid.
        if (result === undefined || result.length === 0) {
            msg.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.
            return; // This exits the code so the rest doesn't run.
        }
    console.log(result[0]);

        // Variables
        var current = result[0].current; // This is a variable for the current part of the JSON output
        var location = result[0].location; // This is a variable for the location part of the JSON output
        var forecast = result[0].forecast;
    console.log(forecast[0])

        // Let's use an embed for this.
        const embed = new msgmb()
            .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
            .setTitle(`Weather for **__${current.observationpoint}__**`) // This shows the current location of the weather.
            .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
            .addField("Latitude", `${location.lat}`, true)
            .addField("Longitude", `${location.long}`, true)
            .setColor(0xed481e) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
            .addField('Timezone',`${location.timezone.indexOf("-") == 0 ? location.timezone : "+" + location.timezone} ${parseInt(location.timezone) > 1 ? "hrs" : "hr"}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
            .addField('Degree Type',/*location.degreetype*/ dgTp ? dgTp.toUpperCase() : "C", true)// This is the field that shows the degree type, and is inline
            .addField('Temperature',`${current.temperature} °${dgTp ? dgTp.toUpperCase() : "C"}`, true)
            .addField('Feels Like', `${current.feelslike} °${dgTp ? dgTp.toUpperCase() : "C"}`, true)
            .addField('Winds',current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true);

            // Now, let's display it when called
            await msg.channel.send({embed});
    });
}
exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["w"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "weather",
  description: "Shows weather info for the given city.",
  usage: "<city:str> [degreeType:str{1,1}]",
  usageDelim: "|",
};

const createForecast = (msg, fore, loc) => {
  const foreEmbed = new msgmb()
    .setTitle(`${loc.name} forecast for ${fore.day}`)
    .setThumbnail(`http://blob.weather.microsoft.com/static/weather4/en-us/law/${fore.skycodeday}.gif`)
    .setDescription(`**${fore.sytextday}**`)
    .addField("Min. Temp", fore.low, true)
    .addField("Max. Temp", fore.high, true)
    .addField("Precipitations", fore.precip == "" ? "No precipitations" : `${fore.precip}mm`, true)
  msg.channel.send(foreEmbed)
}