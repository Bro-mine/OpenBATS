const { Client, Intents} = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const execSync = require('child_process').execSync;
const fs = require('fs');
const https = require('https');
const config = require('../../config.json');


client.on('ready', () => {
    console.log('ImageMagick is ready');
});

client.on('messageCreate', message => {
    const args = message.content.slice().trim().split(/ +/);
    const command = args.shift().toLowerCase();
    let text = args.concat();

    if (command == '-convert') {
	let data = message.attachments.first().url
	var content = fs.createWriteStream('./' + text[0]);
	const request = https.get(data, function(response) {
  	response.pipe(content);
	    
	    setTimeout(() => execSync('etc/convert ' + text[0] + " " + text[1]), 10000);
	    setTimeout(() => message.channel.send({ files: ['./' + text[1]] }), 15000);
	    setTimeout(() => execSync('rm ' + text[0] + " " + text[1]), 20000);
	    // This is not ready yet for actual use, using setTimeout() like this is not a good solution, as well
	});

    }
});
				 
				 

client.login(config.token);
