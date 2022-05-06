#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://kunisensei92.github.io
# git push -f git@github.com:kunisensei92/kunisensei92.github.io.git main

# if you are deploying to https://kunisensei92.github.io/web3-app-solidity
git push -f git@github.com:kunisensei92/web3-app-solidity.git main:gh-pages

cd -
