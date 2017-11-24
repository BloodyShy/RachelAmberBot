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

class Game {
  constructor(data) {
    /**
     * The name of the game being played
     * @type {string}
     */
    this.name = data.name;
      /Ахуенную жизнь

    /**
     * The type of the game status
     * @type {number}
     */
    this.type = data.type;

    /**
     * If the game is being streamed, a link to the stream
     * @type {?string}
     */
    this.url = data.url || null;
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.TOKEN);
