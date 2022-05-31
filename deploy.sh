#!/usr/bin/env sh

# abort on errors
set -e
expo build:web
cd web-build
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:cabarbato/monocat.git main:gh-pages

cd -