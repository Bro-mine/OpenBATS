const { Client, Intents} = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('../../../../config.json');

client.on('ready', () => {
	console.log('Surprise is ready');
});


client.on('messageCreate', message => {

	const messages = ['On your way!', 'So a surprise, it is?', 'Hope you enjoy it!', 'Good choice!', 'There we go!', 'Coming right up!'];
	const drinks = ['./images/water.png', './images/tea.png', './images/skyy.png', './images/heineken.png', './images/guinness.png', './images/JDwhiskey.png', './images/cptmorgan.png', './images/carlsberg.png', './images/carling.png', './images/brewdog.png', './images/bepis.png'];

	const randomMessage = messages[Math.floor(Math.random() * messages.length)];
	const randomDrinks = drinks[Math.floor(Math.random() * messages.length)];

	if (message.content.toLowerCase() === '-surprise') {
		message.channel.send(randomMessage);
		message.channel.send({ files: [randomDrinks] });
	}
});

client.login(config.token);
