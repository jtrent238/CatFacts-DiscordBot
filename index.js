const Discord = require('discord.js');
const client = new Discord.Client();
//const settings = require('./settings.json');

client.on('ready',() => {
  console.log('I\'m Online\nI\'m Online');
});

var request = require('request');

client.on('message', message => {
  
  if (message.content.includes(client.user)) {
  request('https://catfact.ninja/fact', function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var importedJSON = JSON.parse(body);
                        //   console.log(catfact.fact);
                        message.channel.send("Did you know? " + importedJSON.fact);
                    }
                })
  }
});

client.login(process.env.TOKEN);