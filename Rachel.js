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

client.on('game', status =>
class Game {
  constructor(data) {
    /**
     * The name of the game being played
    @type {string}
     /'Ахуенную жизнь!'
    this.name = data.name;

    /**
     * The type of the game status
    @type {number}
     */
    this.type = data.type;
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.TOKEN);
