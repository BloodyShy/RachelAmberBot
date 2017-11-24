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
client.login(MzgzMzQ1NzAyOTk2Mjc5Mjk5.DPlhrQ.LajMiCjjNP-GC7Hg89B8od04Ilc);
