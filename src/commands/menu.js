const { Client, Intents} = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('../../config.json');


client.on('ready', () => {
	console.log('The Menu is ready');
});

const embed = new Discord.MessageEmbed()
	.setTitle('Menu')
	.setDescription('Shows drinks and snacks!')
	.addField('-------------------------------------------------------------------------' + '\n\n**Try to order something! Just write -drink or -eat!**', 'Both lowercase and uppercase are valid.')
	.addFields(
		{ name: '**Drinks**', value: `
  Bepis
  Brewdog
  Captain Morgan
  Carling
  Carlsberg
  Guinness
  Heineken
  Jack Daniels
  Linux
  Octokeg
  Skyy Vodka
  Tea
  Water
  Windows
`, inline: true },
		{ name: '**Food**', value: `
  Android
  Beans
  Burger and fries
  Burger and salad
  Cabbage rolls
  Doner
  Fries
  Nachos
  Pie
  Salad
  Steak
  Steak and fries
  Cake
  `, inline: true },
	)
	.setColor('#39A1FF');

client.on('messageCreate', message => {

	if (message.content.toLowerCase() === '-menu') {
		message.channel.send({ embeds: [embed] });

	}
});

function menu() {
	return { embeds: [embed] };
}

module.exports = { menu };

client.login(config.token);
