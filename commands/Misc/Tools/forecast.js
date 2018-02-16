var weather = require('weather-js');
const { MessageEmbed: msgmb } = require("discord.js");
var color = require('dominant-color');
exports.run = async (client, msg, [city, dgTp, day]) => {
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

        // Variables
        var current = result[0].current; // This is a variable for the current part of the JSON output
        var location = result[0].location; // This is a variable for the location part of the JSON output
        var forecast = result[0].forecast;
        
        if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
          return createForecast(msg, forecast[day-1], location);
        }
        const m = []
            await createForecast(m, forecast[0], location);
            await createForecast(m, forecast[1], location);
            await createForecast(m, forecast[2], location);
            await createForecast(m, forecast[3], location);
            await createForecast(m, forecast[4], location);
        msg.channel.send(m.join("\n\n**-------------**\n\n"))
    });
}
exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["fore"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
  requiredModules: [],
};

exports.help = {
  name: "forecast",
  description: "Shows forecast info for the given city.",
  usage: "<city:str> [degreeType:str{1,1}] [daysFromNow:int{1,1}]",
  usageDelim: "|",
};

const createForecast = (msgArr, fore, loc) => {
  const foreEmbed = `${loc.name} forecast for ${fore.day}:
*${fore.skytextday}*
**__Min. Temp__**: ${fore.low}
**__Max. Temp__**: ${fore.high}
**__Precipitations__**: ${fore.precip == "" ? "No precipitations" : `${fore.precip}mm`}`
  msgArr.push(foreEmbed)
}