const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const config = require('../../config.json');

client.on('ready', () => {
	console.log('HELP is ready');
	client.user.setPresence({
		status: 'online',
		activity: {
			name: '-help for support',
			type: 'PLAYING',
		},
	});
});

client.on('messageCreate', message => {

	const embed = new EmbedBuilder()
		.setTitle('RoBATS Help and Support Desk')
		.setDescription('Assistance for the commands supported by RoBATS')
		.addFields({name: '-----------------------------------------------------------', value: '\n\nBoth lowercase and uppercase work on commands, don\'t worry about that. \n\nThe standard prefix for RoBATS is "-" (hyphen)'})
		.addFields({ name: '**Commands:**', value: `
		**ascii** - Generates ascii text      **(-ascii <text here>)**
		**menu** - Shows the menu for the pub, food and drinks      **(-menu)**
		**drink** - Drinks something (only works with the hidden options and drinks on the menu)
		**eat** - Same as before, but with food
		**invite** - lol like anyone's gonna use this
		**incorrect** - Incorrect quote generator, supports 1 to 4 names
		**chatbot** - Just ping RoBATS, and say something!
                **changelog** - Sends a copy of the changelog file
		\n\nmore commands will appear as new features are added. The chatbot function does not require invoking a command such as "-chatbot", just read the description for that one.
		`, inline: true });

	if (message.content.toLowerCase() === '-help') {
		message.channel.send({ embeds: [embed] });

	}
});

client.login(config.token);
// I am using vim to edit this, it's truly different...
// Emacs is better than vim, but who cares? It's just a text editor, dumbass.
