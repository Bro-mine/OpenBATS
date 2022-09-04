const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const config = require('../../../../config.json');
const random = require('random');
const menu = require('../../menu');

client.on('ready', () => {
	console.log('Drinks are ready');
});


client.on('messageCreate', message => {

	const messages = ['On your way!', 'On the way!', 'There we go!', 'Good choice!', 'Nice taste!', 'There you go!', 'Awesome choice!'];
	// Picks a random message from the array above, use randomMessage to send a random message.
	const randomMessage = messages[random.int((min = 0), (max = messages.length))];

	const args = message.content.slice().trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-drink') {
		let input = args.concat();

		if (input.length == 0) {
			message.channel.send('Hey mate, I have other people to serve, please, have your choice defined when ordering. You need to pick something from the menu.');
			return;
		} else {

			switch (input[0].toLowerCase()) {
			case 'bepis':
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/bepis.png'] });
				break;
			case 'brewdog':
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/brewdog.png'] });
				break;
			case 'carling':
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/carling.png'] });
				break;
			case 'carlsberg':
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/carlsberg.png'] });
				break;
			case 'captain':
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/cptmorgan.png'] });
				break;
			case 'jack':
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/JDwhiskey.png'] });
				break;
			case 'menu':
				message.channel.send('how the hell would you even drink the menu?');
				setTimeout(() => message.channel.send('to each their own, i guess'), 3000);
				setTimeout(() => message.channel.send(menu.menu()), 7000);
				setTimeout(() => message.channel.send('just... here, take it...'), 7000);
				break;
			case 'guinness':
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/guinness.png'] });
				break;
			case 'heineken':
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/heineken.png'] });
				break;
			case 'milk':
				message.channel.send('heck no');
				message.channel.send({ files: ['./images/cow.jpg'] });
				break;
			case 'skyy':
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/skyy.png'] });
				break;
			case 'tea':
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/tea.png'] });
				break;
			case 'water':
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/water.png'] });
				message.channel.send('also, screw nestle');
				break;
			case "windows":
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/2000.png'] });
				break;
			case "linux":
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/leenoox.png'] });
				break;
			case "octokeg":
				message.channel.send(randomMessage);
				message.channel.send({ files: ['./images/octokeg.png'] });
				break;
			}
		}
	}
});

// I don't know why, I shouldn't have to know why, it shouldn't be happening, BUT THE RNG IS NUTS EVEN HERE, murder me
client.login(config.token);
