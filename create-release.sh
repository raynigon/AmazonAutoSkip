#!/bin/bash

# Install WebExt Tool for publishing to Firefox
if ! type "web-ext" > /dev/null; then
    npm install --global web-ext
fi

# Install GithubCLI for publishing to Github
if ! type "github-release" > /dev/null; then
    npm install -g github-release-cli
fi

VERSION=`cat manifest.json | python3 -c "import sys, json; print(json.load(sys.stdin)['version'])"`
COMMIT_LOG=`git log -1 --format='%s'`

git tag | grep "v$VERSION"
RESULT=$?
if [ $RESULT -eq 1 ]; then
    git tag -a "v$VERSION" -m "New Version with Improvements and Bugfixes. ${COMMIT_LOG}"
fi
git push --follow-tags

web-ext build --ignore-files create-release.sh --overwrite-dest
github-release upload \
  --owner "raynigon" \
  --repo "AmazonAutoSkip" \
  --tag "v$VERSION" \
  --name "v$VERSION" \
  --body "New Version with Improvements and Bugfixes. ${COMMIT_LOG}" \
  web-ext-artifacts/*.zip
