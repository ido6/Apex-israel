const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NTQ3NDAyMTU1MjAwNDc5MjMz.D02P3w.9-ccCb8M6lFN0LtGZezsFSa_720);
