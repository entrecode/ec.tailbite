#!/bin/sh

git diff-index --quiet HEAD --
git checkout develop
git pull
npm run build && 
cp package.json dist &&
cp README.md dist &&
bump patch && 
npm i --force && 
git add . && 
git commit -m "bump version" &&
cd dist &&
npm publish
