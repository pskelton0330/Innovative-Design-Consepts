#!/bin/bash
set -e

# Install bundler if not present
if ! command -v bundle >/dev/null; then
  gem install bundler
fi

bundle install --path vendor/bundle
