#!/bin/sh

git diff-index --quiet HEAD --
git checkout develop
git pull
npm run build && 
bump patch && 
npm i --force && 
git add . && 
git commit -m "bump version" &&
cp package.json dist &&
cp README.md dist &&
cd dist &&
npm publish
