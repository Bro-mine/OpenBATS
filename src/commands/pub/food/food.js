const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const config = require('../../../../config.json');
const random = require('random');

client.on('ready', () => {
	console.log('Food is ready');
});


client.on('messageCreate', message => {

	const messages = ['On your way!', 'On the way!', 'There we go!', 'Good choice!', 'Enjoy your meal!', 'There you go!'];
	// Picks a random message from the array above, use randomMessage to send a random message.
	const randomMessage = messages[random.int((min = 0), (max = messages.length))];
	
	//console.log(randomMessage);

	if(message.content.toLowerCase() == '-eat burger and fries') {
		message.channel.send(randomMessage);
		message.channel.send({ files: ['./images/burgerfries.png'] });
		return;
	} else if (message.content.toLowerCase() == '-eat burger and salad') {
		message.channel.send(randomMessage);
		message.channel.send({ files: ['./images/burgersalad.png'] });
		return;
	} else if (message.content.toLowerCase() == '-eat steak and fries') {
		message.channel.send(randomMessage);
		message.channel.send({ files: ['./images/steakfries.png'] });
		return;
	} else if (message.content.toLowerCase() == '-smike some cigs cheers') {
		message.channel.send('there you go maté');
		message.channel.send({ files: ['./images/marlboro.jpg'] });
		return;
	} else {

		const args = message.content.slice().trim().split(/ +/);
		const command = args.shift().toLowerCase();

		if(command === '-eat') {
			let input = args.concat();

			if (input.length == 0) {
				message.channel.send('Hey mate, I have other people to serve, please, verify you haven´t made any typos. You need to pick something from the menu btw.');
				return;
			} else {

				switch (input[0].toLowerCase()) {
				case 'beans':
					message.channel.send(randomMessage);
					message.channel.send({ files: ['./images/beanz.png'] });
					break;
				case 'cabbage':
					message.channel.send(randomMessage);
					message.channel.send({ files: ['./images/prak.png'] });
					break;
				case 'doner':
					message.channel.send(randomMessage);
					message.channel.send({ files: ['./images/mastermind.png'] });
					break;
				case 'fries':
					message.channel.send(randomMessage);
					message.channel.send({ files: ['./images/fries.png'] });
					break;
				case 'nachos':
					message.channel.send(randomMessage);
					message.channel.send({ files: ['./images/nachos.png'] });
					break;
				case 'pie':
					message.channel.send(randomMessage);
					message.channel.send({ files: ['./images/pie.png'] });
					break;
				case 'salad':
					message.channel.send(randomMessage);
					message.channel.send({ files: ['./images/salad.png'] });
					break;
				case 'steak':
					message.channel.send(randomMessage);
					message.channel.send({ files: ['./images/steak.png'] });
					break;
				case 'cake':
					message.channel.send(randomMessage);
					message.channel.send({ files: ['./images/cake.png'] });
					break;
				case 'android':
					message.channel.send(randomMessage);
					message.channel.send({ files: ['./images/android-min.png']});
					break;
				}
			}
		}
	}
});

client.login(config.token);
