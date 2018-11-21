#!/bin/bash

GIT_URL=https://github.com/ehab1515/Nahj-Portal

isNpmPackageInstalled() {
   npm ls -g $1 > /dev/null 2>&1
}


# Pull latest code
if [[ -e /src ]]; then
  echo "update the project"
  git pull
  npm i

  if  ! isNpmPackageInstalled  prisma 
  then
      npm i -g prisma
  elif ! isNpmPackageInstalled  pm2
  then
      npm i -g pm2
  elif ! isNpmPackageInstalled  graphql-cli
  then 
    npm i -g graphql-cli
  fi

  docker-compose up -d 
  prisma deploy

else
  git clone $GIT_URL 
  cd /NAJJ-PORTAL
  docker-compose up -d 
  npm i 
  npm i -g  prisma pm2  graphql-cli
  prisma deploy
fi

# Run application wiht pm2 
export NODE_ENV=development && export PORT=4000 && pm2 start pm2-development-ecosystem.yml