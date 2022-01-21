const { Client, Intents} = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const random = require('random');
const config = require('../../config.json');


client.on('ready', () => {
	console.log('Incorrectrand is ready');
});


client.on('messageCreate', message => {


	const args = message.content.slice().trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-incorrect') {
		let text = args.concat();

		var messages1 = [text[0] + ': You can de-escalate any situation by simply saying, \'Are we about to kiss?\'\n' + text[0] + ': Doesn\'t work for getting out of speeding tickets, by the way.',
			text[0] + ': You know how I roll.\n' + text[0] + ': And I’m not talking about that time I fell into a pile of dung at the foot of a hill.',
			text[0] + ': Fool me once, I’m gonna kill you',
			text[0] + ': What doesn\'t kill me should run, because now I\'m fucking pissed.',
			text[0] + ': When someone points at your black clothes and asks whose funeral it is, having a look around the room and saying \'Haven’t decided yet\' is typically a good response.',
			text[0] + ': Okay okay stop asking me if I\'m straight, gay, bi, whatever. I identify as a FUCKING THREAT.',
			text[0] + ': Well, well, well... if it isn’t my old friend: the dawning realization that I fucked up bad.',
			text[0] + ': You seem familiar, have I threatened you before?',
			text[0] + ': I’m sick and tired of being called \'mortal\' like, you don’t know that. Neither do I. I have never died even ONCE. Nothing has been proven yet. Stop making assumptions. It’s rude.',
			text[0] + ': You wanna see how hardcore I am?\n' + text[0] + ': *punches wall*\n' + text[0] + ':\n' + text[0] + ': Take me to the hospital.',
			text[0] + ': My life isn’t as glamorous as my wanted poster makes it look like.',
			text[0] + ': If I\'m really as evil as you say I am, then have the gods strike me down where I stand.\n' + '*lightning strikes ' + text[0] + '*\n' + text[0] + ': Ha! Nice try, jackass! Next time, give it your A-game!',
			text[0] + ': I was born for politics. I have great hair and I love lying.',
			text[0] + ': You’ll have a hard time believing this because it never happens, but I made a mistake.',
			text[0] + ': \'Person of interest\' is almost too flattering.\n' + text[0] + ': Like, if the police were to pound on my door and go, \'A man has been murdered in your building and you are a person of interest,\' I\'d be like, \'Moi? Oh, do go on.\'',
			text[0] + ': BEHOLD, the field in which I grow my fucks! Lay thine eyes upon it, and thou shalt see that it is barren!',
			text[0] + ': Physically, yes, I could fight a bird. But emotionally? Imagine the toll.',
			text[0] + ': Dear friends, your Christmas gift this year… is me. That’s right, another year of friendship. Your membership has been renewed.',
			text[0] + ': So apparently the \'bad vibes\' I’ve been feeling are actually severe psychological distress',
			text[0] + ': Schrödinger’s cat is overrated. If you wanna see something that’s both dead and alive you can talk to me any time of the day.',
			text[0] + ': Not trying to brag or anything, but I can wake up without an alarm clock now simply due to my crippling and overwhelming anxiety, so...',
			text[0] + ': I’m going to defeat you with the power of friendship! ... And this knife I found.',
			text[0] + ': You think I really give a fuck? I can’t even read.',
			text[0] + ': People are always asking me if I\'m a morning person or a night person.\n' + text[0] + ': And I\'m just like, \'Buddy! I\'m barely even a PERSON!\'',
			text[0] + ': If you can’t beat them, dress better than them.',
			text[0] + ': Died and came back as a cowboy, I call that reintarnation.',
			text[0] + ': With great power comes great need to take a nap. Wake me up later.',
			text[0] + ': I’d like to offer you moral support, but I have questionable morals.',
			'Shapeshifter: *transforms to look like Person A*\n' + text[0] + ': Okay, are you like BLIND? You look nothing like me. First off, I\'m way taller. Secondly, I DO NOT look so sleep deprived and lastly, if you could drag comb through that hair you\'re like a 7 on a good day and I\'ve been told I\'m a constant 10.',
			text[0] + ': I’ve come to a point in my life where I need a stronger word than fuck',
			text[0] + ', threatening the others with a paintball gun: Listen... Life comes at us fast. We don\'t know what life is gonna give us... And today, it\'s gonna give you... a paintball!',
			text[0] + ', motioning to a Halloween display: All these ghosts! All these ghosts! I still can’t find a boo.',
			text[0] + ': Some of you may die, but that’s a sacrifice I’m willing to make.',
			text[0] + ': now that I think about it, a group of karens is a homeowner\'s association',
			text[0] + ': boomers are nostalgic for beating their kids',
			text[0] + ': if korean pop is kpop then chinese rap is crap',
			text[0] + ': anything over $0 is overpriced',
			text[0] + ': found a cool tree and stick, might bury my report card later idk',
			text[0] + ': I ain\'t the sharpest tool on the hanukkah tree'];

		var messages2 = [text[0] + ', standing on the table: you have heard of Vans, the shoe company. Now get ready for Shoes, the van company.\n' + text[1] + ': ...\n' + text[1] + ': Please leave the staff meeting.',
			text[0] + ': Today shall be a good day\n' + text[1] + ': :)\n' + text[0] + ': Time to go back to bed',
			text[0] + ': Treat spiders the way you want to be treated.\n' + text[1] + ': Killed without hesitation.\n' + text[0] + ': No.',
			text[0] + ': I think I\'m having a mid-life crisis.\n' + text[1] + ': You\'re like 15 years old\n' + text[0] + ': I MIGHT DIE AT 30!',
			text[0] + ': Am I going too far?\n' + text[1] + ': No, no, no. You went too far about seven hours ago. Now you\'re going to prison.',
			text[0] + ': I learned some very valuable lessons from this.\n' + text[1] + ': I’m guessing they are all horrible distortions on the lessons you actually should’ve taken away.\n' + text[0] + ': Death isn’t real, and I’m basically God.',
			text[0] + ': So what do you do?\n' + text[1] + ': I work in genetic research, and I\'m currently trying to eliminate all Cancers.\n' + text[0] + ': Wow, impressive.\n' + text[1] + ': Then I\'ll move on to Leos.',
			text[0] + ': .. .----. -- / ... --- .-. .-. -.--\n' + text[1] + ': What\'s that?\n' + text[0] + ': Remorse code.\n' + text[1] + ': I\'m even angrier now.',
			text[0] + ': If you were to vacuum up jello through a metal tube, well I think that’d be a neat noise\n' + text[1] + ': I beg to differ\n' + text[0] + ': Then Beg',
			text[0] + ': I\'m 10 times funnier and sexier than you\n' + text[1] + ': 10 times 0 is still 0 though\n' + text[0] + ': Jokes on you, I can\'t do math',
			text[0] + ': You kill people for money?!\n' + text[1] + ': I can explain!\n' + text[0] + ': And all this time I’ve been doing it for free like a chump!',
			text[0] + ': English is a difficult language. It can be understood through tough thorough thought, though.\n' + text[1] + ': You need to stop.',
			text[0] + ': I\'ve already sent good vibes your way… they’re coming. There’s nothing you can do to stop them.\n' + text[1] + ': This is the most threatening way I’ve ever been cheered up.',
			text[0] + ': I’m gonna need a human skull and I can\'t have you ask any questions why.\n' + text[1] + ': Only if you also don\'t ask why\n' + text[1] + ': *Pulls out 7 pristine human skulls* Take your pick.\n' + text[0] + ': \n' + text[1] + ': \n' + text[0] + ': This one is fine',
			text[0] + ': What the fuck is wrong with you?!\n' + text[1] + ': Wow, you could start with a \'good morning\'.\n' + text[0] + ': Good morning. What the fuck is wrong with you?!',
			text[0] + ': So are we flirting right now?\n' + text[1] + ': I AM LITERALLY STABBING YOU\n' + text[0] + ': That doesn’t answer my question',
			text[0] + ': Remember when you didn\'t try to solve all your problems with attempted murder?\n' + text[1] + ': Stop romanticizing the past.',
			text[0] + ': Can you keep a secret?\n' + text[1] + ': Do you know anything about my life?\n' + text[0] + ': No I do not. Good point.',
			text[0] + ', trying to cheer the group up: Things could be worse, you know!\n' + text[1] + ': How?\n' + text[0] + ': How what?\n' + text[1] + ': How could they be worse?\n' + text[0] + ': They couldn’t, I lied.\n' + text[1] + ':',
			text[0] + ': I’m going to take you out\n' + text[1] + ': great, it’s a date!\n' + text[0] + ': I meant that as a threat.\n' + text[1] + ': See you at five!',
			text[0] + ': Three words. Say them and I\'m yours.\n' + text[1] + ': Three words.\n' + text[0] + ': ',
			text[0] + ': Hey, it\'s your turn to wash dishes.\n' + text[1] + ': I\'LL WASH THE WALLS RED WITH YOUR BLOOD.\n' + text[0] + ': \'Kay, but before that, wash the dishes, also use soap this time?',
			text[0] + ': How petty can you get?\n' + text[1] + ': I once edited a Wikipedia article to win an argument I was wrong about.',
			text[0] + ', watching the news: Someone tried to fight a squid at the aquarium today!\n' + text[1] + ': *walks in covered with ink* Well, maybe the squid was being a dick.',
			'*' + text[0] + 'and' + text[1] + 'skipping stones on a lake*\n' + text[0] + ': It’s such a beautiful evening.\n' + text[1] + ', whispering: Take that you fucking lake',
			text[0] + ': Bad things keep happening to me, like I have bad luck or something.\n' + text[1] + ': ' + text[0] + ', you don\'t have bad luck. The reason bad things happen to you is because you\'re a dumbass.',
			text[0] + ': Change is inedible.\n' + text[1] + ': Don\'t you mean inevitable?\n' + text[0] + ', spitting out coins: No, I don\'t.',
			text[0] + ': You know, I\'m starting to regret showing you how that blender works.\n' + text[1] + ', drinking toast: Why do you say that?',
			text[0] + ': This is such a bad idea.\n' + text[1] + ': Then why are you coming along?\n' + text[0] + ': One of us need to be able to talk the cops out of arresting us when this inevitably goes wrong.',
			text[0] + ': ' + text[1] + '... Why did you draw a pentagram on the floor?\n' + text[1] + ': Your text told me to satanize the house before you returned.\n' + text[0] + ':  \n' + text[0] + ': I wrote sanitize, ' + text[1],
			text[0] + ': Welcome, fellow idiots.\n' + text[1] + ': Hello, ' + text[0] + '. \n' + text[0] + ': No, no, not you, you\'re not an idiot\n' + text[1] + ': You underestimate me',
			text[0] + ': You\'re the love of my life and my best friend, I would do anything for you.\n' + text[1] + ': I want you to eat three meals a day and have a decent sleep schedule.\n' + text[0] + ': Absolutely not.',
			text[0] + ': Oh just so you know, it\'s very muggy outside\n' + text[1] + ': \n' + text[1] + ': ' + text[0] + ', I swear, if I step outside and all of our mugs are on the front lawn...\n' + text[0] + ': *Sips coffee from bowl*',
			text[0] + ': what did you do this time\n' + text[1] + ': listen, a lot of people died don\'t get me wrong\n' + text[1] + ': but',
			text[0] + ': I\'m in a bad place mentally rn\n' + text[1] + ': we all are, what happened?\n' + text[0] + ': oh nothing happened\n' + text[0] + ': i was just imagining living in England',
			text[0] + ': can I rant to y\'all\n' + text[1] + ': yeah, go ahead\n' + text[0] + ': ok, it\'s about e-girls again',
			text[0] + ': tfw google docs autocorrects brian into brain\n' + text[1] + ': .\n' + text[1] + ': what\'s the difference\n' + text[1] + ': OOOOOOOH\n',
			text[0] + ': *holds up picture of some eldritch abomination*\n' + text[0] + ': guess who they are\n' + text[1] + ': your parents\n' + text[0] + ': no keep guessing\n',
			text[0] + ': I\'m honestly the type to get blackout drunk in college\n' + text[1] + ': yeah because it would only take half a beer\n',
			text[0] + ': I strapped a gun to a roomba and released it onto the streets\n' + text[1] + ': automation is taking jobs away from cops\n',
			text[0] + ': my dad died in the line of duty last year\n' + text[1] + ': ratio',
			text[0] + ': take a look at this funny image!\n' + text[1] + ': I am going to make the imperial japan documentary into an instruction manual',
			text[0] + ': What? I\'m not that aggressive!\n' + text[1] + ': You whacked me with a pair of crocs and stole my chocolate chips yesterday.' + text[0] + ': Well, that\'s just survival of the fittest!',
			text[0] + ': do you take constructive criticism?\n' + text[1] + ': not without crying',
			text[0] + ': I met a dumbass today, it felt awful\n' + text[1] + ': you looked in a mirror?\n' + text[0] + ': No, I ran into you',
			text[0] + ': my life is an endless cycle of pain and loss\n' + text[1] + ': you ok?\n' + text[0] + ': I had cheese in the fridge but the fridge wasn’t plugged in and my cheese went bad and now I have no cheese.',
			text[0] + ': anyone know a good place to get incorrect quotes from?\n' + text[1] + ': me\n ' + text[0] + ': give\n' + text[1] + ': ask me a quote and if I know it, it\'s probably incorrect',
			text[0] + ': you know, sometimes I think you\'re a psychopath.\n' + text[1] + ': wow. my feelings are hurt.\n' + text[0] + ': but you\'re stabbing someone right now\n' + text[1] + ': yeah, but they deserved it.\n',
			text[0] + ': Do you think I should do this?\n' + text[1] + ': You will still do it even if I say you shouldn\'t, so just do as you like.',
			text[0] + ': I\'m worried about the test tomorrow\n' + text[1] + ': wait, we had a test?',
			text[0] + ': I\'ve gotten to the point of the day where it hurts to think...\n' + text[1] + ': that\'s called a tumor.',
			text[0] + ': link? gracuas\n' + text[1] + ': this is why you\'re failing spanish',
			text[0] + ': hey ' + text[1] + ', take a look at this drawing I made of your OC!\n' + text[1] + ': oh my goodness\n' + text[1] + ': poor girl\n' + text[1] + ': my daughter\n' + text[1] + ': what did you do to her\n',
			text[0] + ': I\'m going to nuke pinoy\n' + text[1] + ': but you\'re pinoy-\n' + '*distant rumbling*\n' + text[0] + ': no more pinoy\n' + text[0] + ': world peace',
			text[0] + ': FUCK I HIT MY KNEE ON THE TABLE OUCH PAIN FXCKXCKJCJ\n' + text[1] + ': wholesome'];

		var messages3 = [text[0] + ': Let me show you a picture from last night that really upset me\n' + text[1] + ': Okay, but in my defense, ' + text[2] + ' bet me 50 cents I couldn’t drink all that shampoo.\n' + text[0] + ': That’s not what I wanted to- you drank SHAMPOO?!',
			'*fighting noises in the background*\n' + text[0] + ': telling ' + text[1] + ' and ' + text[2] + ' to resolve their differences involves one of them dying',
			text[0] + ': found https://en.wikipedia.org/wiki/Ringling_Bros._and_Barnum_%26_Bailey_Clown_College \n' + text[1] + ': hey ' + text[2] + ', here\'s a college you can get into',
			text[0] + ': this is my essay\n' + text[1] + ': probably your best yet ngl\n' + text[0] + ': ' + text[2] + ' has added 6 comments and isn\'t past the first line yet',
			text[0] + ': when y\'all head to mars, take me with you, I have a necessary element you don\'t have\n' + text[1] + ': stupidity?\n' + text[2] + ': a hentai addiction?\n' + text[0] + ': no\n' + text[0] + ': i\'m funny\n' + text[1] + ': no you aren\'t\n' + text[0] + ': maybe not 90% of the time, but 10% of the time I\'m really funny\n' + text[2] + ': that\'s because you only have your camera on 10% of the time\n',
			text[0] + ': do you mind if I slyly mention you\'re single?\n' + text[1] + ': This is going to go horribly wrong\n' + text[0] + ': you will not notice, I swear to god.\n' + text[2] + ': ' + text[0] + ', you wanted to see me?\n' + text[0] + ': ' + text[1] + '\'s single\n' + text[1] + ': ',
			text[0] + ': if anyone can look like an incel, it\'s ' + text[1] + '\n' + text[2] + ': he\'s dead\n' + text[0] + ': just like most incels',
			text[0] + ': *bursts into the room*\n' + text[0] + ': SUBSCRIBE TO MY YOUTUBE CHANNEL\n' + text[1] + ': no\n' + text[2] + ': no',
			text[0] + ': ' + text[1] + ', what do IDK, LY, and TTYL mean?\n' + text[1] + ': I don’t know, love you, talk to you later\n' + text[0] + ': Ok, I love you too, I’ll just ask' + text[2]];


		var messages4 = [text[0] + ': santa isn\'t real, guys.\n' + text[1] + ': wait, santa isn\'t real?\n' + text[2] + ': "he has magic, he doesn\'t need science!"\n' + text[3] + ': your honor, santa claus is simply built different',
			text[0] + ': okay, time to make fun of\n' + text[1] + ' for getting that stupid vase!\n' + text[2] + ': I bet you 5 bucks he\'s gonna get a vase smashed over his head.\n' + text[3] + ': You\'re on. They run faster than that.',
			text[0] + ': guys I think I\'m retard\n' + text[1] + ': yes\n' + text[2] + ': we know?\n' + text[3] + ': you think?',
			text[0] + ': I have heard more about bugs from' + text[1] + ' than I have ever heard my whole life up to this point\n' + text[2] + ': ' + text[1] + ' will become bugologist\n' + text[3] + ': ceo of bug\n' + text[0] + ': ' + text[1] + ' will create their sanctuary of bees and tell them not to make honey and thus human dies',
			text[0] + ': why do I feel horny\n' + text[1] + ': what\n' + text[2] + ': what\n' + text[3] + ': let\'s go'];

		const randomMessage0 = messages1[random.int((min = 1), (max = messages1.length))];
		const randomMessage1 = messages2[(Math.floor(Math.random() * messages2.length))];
		const randomMessage2 = messages3[Math.floor(Math.random() * messages3.length)];
		const randomMessage3 = messages4[Math.floor(Math.random() * messages4.length)];

		// convert this to new algo after adding at least one more template
		// TODO: turn all these randomMessage(n) into one function that takes "text" length and uses it into the variable, thus, we'll only need one variable instead of 4
		// Actually, it might be more important to turn all that text into a json file, leave the clutter out of this one.

		if (message.content.toLowerCase().includes('@')) {
			message.channel.send('Sorry, due to issues with pinging, the incorrect quote generator won\'t work if there\'s any mention of the character "@", we apologize.');
			return;
		}

		if (text.length == 1) {
			message.channel.send(randomMessage0);
		} else if (text.length == 2) {
			message.channel.send(randomMessage1);
		} else if (text.length == 3) {
			message.channel.send(randomMessage2);
		} else if (text.length == 4) {
			message.channel.send(randomMessage3);
		} else {
			message.channel.send('That won\'t work, you need to input at least one name, or 4 at maximum.');
		}
	}
});

client.login(config.token);
