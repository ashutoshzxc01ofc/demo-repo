#!/bin/bash

while true
do
  echo "🔄 Checking for updates from remote..."
  git fetch origin

  LOCAL=$(git rev-parse @)
  REMOTE=$(git rev-parse @{u})

  if [ $LOCAL != $REMOTE ]; then
    echo "🚀 New changes found! Pulling latest code..."
    git reset --hard origin/$(git rev-parse --abbrev-ref HEAD)
    echo "✅ Code updated!"
  else
    echo "✅ No updates."
  fi

  sleep 10  
done

