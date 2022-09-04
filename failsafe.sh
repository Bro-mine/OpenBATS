#!/bin/bash
SERVICE="[n]ode"
if ps aux | grep $SERVICE
then
    echo "node is running"
else
    echo "node has stopped, restarting RoBATS"
    ./start.sh
fi
