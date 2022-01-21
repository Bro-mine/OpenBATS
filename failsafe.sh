#!/bin/bash
SERVICE="[n]ode"
if ps aux | grep $SERVICE
then
    echo "node is running"
else
    echo "node has stopped, restarting RoBATS"
    ./start.sh
fi

# You know, back when I made this, I didn't know much about shell scripts, and I still don't, but I can see this is stupid as it is, and I could easily fix it, but I simply don't know why I never cleaned any of this up.
