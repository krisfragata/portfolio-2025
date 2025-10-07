#!/bin/bash

# exit immediately if a command fails
set -e

# set image and container names in env
CONTAINER_NAME="portfolio-web"
IMAGE_NAME="portfolio"

# run dockerbuild image
docker build -t "$IMAGE_NAME" -f Dockerfile.dev .

# stop and remove existing containers if they exist
if [ "$(docker ps -aq -f  name=$CONTAINER_NAME)" ]; then
    echo "Stopping and removing old container..."
    docker rm -f "$CONTAINER_NAME"
fi

# run new container in detached mode
docker run -d --name "$CONTAINER_NAME" -p 3000:3000 "$IMAGE_NAME"

# follow logs
echo "Attaching to logs for $CONTAINER_NAME..."
docker logs -f "$CONTAINER_NAME"