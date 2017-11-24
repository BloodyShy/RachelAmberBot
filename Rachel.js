const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'salo') {
    	message.reply('@Marble Sketch Тебя вызывают');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.TOKEN);
