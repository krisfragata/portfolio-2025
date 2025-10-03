#!/bin/bash

# exit early if commands fail
set -e

# declare container name
CONTAINER_NAME="portfolio-web"

# check if container is already running, if so, stop
# else, echo 'no contianer running'
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)"]; then 
    echo "Stopping and removing old container..."
    docker rm -f "$CONTAINER_NAME"
else 
    echo "No container with name: $CONTAINER_NAME..."
fi
    