const { Client, Intents} = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('../../config.json');
var figlet = require('figlet');

client.on('ready', () => {
	console.log('ASCII is ready');
});

client.on('messageCreate', message => {

	const args = message.content.trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (message.content.toLowerCase() == '-ascii ඞ') {
		message.channel.send('```' + `MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMWNXXK000000KXNWWMMMMMMMMMMMMMMMMMM
MMMMMMMMMMWX0xoc;'.....  .....,:ld0NWMMMMMMMMMMMMM
MMMMMMMWOl;.     ..',,;;;;,,'.    .'ckNMMMMMMMMMMM
MMMMMMMNl  .,coxOKXNWWWWWWWWNX0xl,.   ,xNMMMMMMMMM
MMMMMMMMXkxKNMMMMMMMMMMMMMMMMMMMMN0l.   :KMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKc.  ,OWMMMMMM
MMMMMMMMMWNK0OkxxxkO0KNWMMMMMMMMMMMMMNo.  ,0MMMMMM
MMMMMMW0o;'.         ..;ox0WMMMMMMMMMMNl   :XMMMMM
MMMMMKl.  ':,   ,lll:,.   .cXMMMMMMMMMMK;  .xMMMMM
MMMMNl  .dXWX;  ;XMMMWKc    oWMMMMMMMMMWd.  cNMMMM
MMMMK;  ,KMMNc  '0MMMMNo    lWMMMMMMMMMM0'  '0MMMM
MMMMNl   ;oo:.  cXWXOd;.   ,0MMMMMMMMMMMX;  .kMMMM
MMMMMXd'.    ..,ll;.   .,cdXWMMMMMMMMMMMNc  .xMMMM
MMMMMMMN0kdl;...  ..;lxKWMMMMMMMMMMMMMMMNc  .xMMMM
MMMMMMMMWKl.  .,lx0NWMMMMMMMMMMMMMMMMMMMNc  .xMMMM
MMMMMMMWk'  .l0NMMMMMMMMMMMMMMMMMMMMMMMMN:  .kMMMM
MMMMMMM0'  .kWMMMMMMMMMWWWWWMMMMMMMMMMMMK,  'OMMMM
MMMMMMWd.  lWMMMMMMMMMNd,,,lXMMMMMMMMMMMx.  :XMMMM
MMMMMMWd.  oWMMMMMMMMMK;   .OMMMMMMMMMMX;  .dWMMMM
MMMMMMMk.  ;KMMMMMMMMWd.    lNMMMMMMMMXc   :XMMMMM
MMMMMMMNl   ,xKNWWWN0l.  .  .:OXWWWN0d,   :KMMMMMM
MMMMMMMMNd.   .',,,..  ,xKk;.  .,,,'.   .oXMMMMMMM
MMMMMMMMMWKx:'..  ..'ckXMMMNOc,......'cxKWMMMMMMMM
MMMMMMMMMMMMWNXK00KXNWMMMMMMMMNXK00KXNMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
` + '```');
		return;
	}

	if(command === '-ascii') {
		let text = args.join(' ');

		figlet((text), function(err, data) {
			if (err) {
				console.log('Something went wrong...');
				console.dir(err);
				return;
			}
			console.log(data);
			message.channel.send('```' + data + '```');
		});
	}
});

client.login(config.token);
