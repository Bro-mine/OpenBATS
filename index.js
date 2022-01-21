const { Client, Intents} = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { registerCommands, registerEvents } = require('./src/utils/registry');
const config = require('./config.json');

(async () => {
	client.commands = new Map();
	client.events = new Map();
	client.prefix = config.prefix;
	await registerCommands(client, '../commands');
	await registerEvents(client, '../events');
	await client.login(config.token);
})();

