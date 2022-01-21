const { Client, Intents} = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('../../config.json');

client.on('ready', () => {
        console.log('Extras are ready');
});

client.on('messageCreate', message => {
    if (message.content.toLowerCase() == '-confetti') {
	message.channel.send({ files: ['./images/confetti.gif'] });
    } else if (message.content.toLowerCase() == '-invite') {
	message.channel.send('https://discord.com/api/oauth2/authorize?client_id=812361661180018700&permissions=8&scope=bot');
	message.channel.send('There you go!');
    } else if (message.content.toLowerCase() == '-changelog') {
    	message.channel.send({ files: ['./changelog.html'] }); 
    }
});
client.login(config.token);

