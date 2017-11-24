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

  /**
   * Whether or not the game is being streamed
   * @type {boolean}
   * @readonly
   */
  get streaming() {
    return this.type === 1;
  }

  /**
   * Whether this game is equal to another game
   * @param {Game} game The game to compare with
   * @returns {boolean}
   */
  equals(game) {
    return this === game || (
      game &&
      this.name === game.name &&
      this.type === game.type &&
      this.url === game.url
    );
  }
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.TOKEN);
