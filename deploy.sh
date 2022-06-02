#!/usr/bin/env sh

# abort on errors
set -e
expo build:web
cd web-build
git init
git add -A
git commit -m 'deploy'
npm run deploy

cd -