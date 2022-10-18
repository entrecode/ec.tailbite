#!/bin/sh

git diff-index --quiet HEAD --
git checkout develop
git pull
npm run build && 
bump patch && 
npm i && 
git add . && 
git commit -m "bump version" &&
npm publish
