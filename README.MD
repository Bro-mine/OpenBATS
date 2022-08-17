# RoBATS, a giant bodge, and how we got here

In the beginning, RoBATS was made as a temporary substitute for Wilburpub on the brotherhood server, as it was meant to be only a temporary thing, its codebase was horrible in the beginning, and as it is a bodge, it still kinda is.

The whole RoBATS project was an interesting one, several concepts were taped into one thing, and it was awesome, albeit it never did much. In the beginning, the server was bustling with life, and several people used the bot, this is not the case anymore, and it is basically in maintenance mode, which is why it is being open sourced. I do not want it to rot, being ran in a box somewhere, until it breaks someday. Hopefully, this project might help someone with similar endeavours.

Clearly, its days of glory have already passed, and the future for the project is uncertain. The only updates this thing gets only happen whenever I feel like updating it, so once in a semester or so.

# Where is the AI module?

As you might've noticed, dear reader, the AI module for the bot is missing. The reason for this is a simple licensing issue I have with that very same module. I'll be real, I didn't write it, though I know how it works. I'll add a replacement whenever I feel like doing that, so basically never.

# Imagemagick support

Basic support for image manipulation was being added some weeks ago, when I lost interest in this project again... Beware! Its method for taking input and actually using imagemagick is DANGEROUS. I suspect specific filenames could result in remote code execution. If you do not want this experimental module with your fork or copy of the bot, remove the "imagick.js" file in "src/commands".

# Potential bugs

There might be some bugs present in some of the easter eggs inside the bot (though there aren't many), as the code wasn't really tested after the port to DJS V13. Nothing that should break it, though, and if that's the case, the easter eggs can be easily removed.

# Contributing to the project

In an eventual failure in the hosting service, I might not put much effort into troubleshooting the issue, as the bot is basically dead at this point (it somehow is in more than 15 servers, last time I checked). You can open pull requests or suggest changes, though hosting is on your hands if you don't want to use the official one.

You can contribute to the project, use the source as it is, use the official bot, or have all the problem in your hands, you're free to do that now.

# To any potential readers from outside the server

If you want to know more, join the server at https://discord.gg/aSPzYGJq3k (EDIT: That link no longer works, I don't have another to replace it), someone ought to tell you more. The official bot is also in that server, if you want to invite it.

This bot basically works as a digital bartender, and can serve food and drinks (well, jpeg images, at least) to its users! It also has some smaller features, such as an ASCII art text generator and an Incorrect Quote Generator. It was made for a niche purpose, so maybe the source would interest one more than its functions.
