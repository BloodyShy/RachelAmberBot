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

  get connection() {
    const connection = this.guild.voiceConnection;
    if (connection && connection.channel.id === this.id) return connection;
    return null;
  });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.TOKEN);
