var later = require("../index");

console.log(JSON.stringify({
  "name": "later2",
  "version": later.version,
  "description": "Determine later (or previous) occurrences of recurring schedules",
  "keywords": ["schedule", "occurrences", "recur", "cron"],
  "author": "Jonathan <jhzhuustc@gmail.com>",
  "repository" : {
    "type" : "git",
    "url" : "git://github.com/zjh1943/later.git"
  },
  "main": "index.js",
  "browserify": "index-browserify.js",
  "jam": {
    "main": "later.js",
    "shim": {
      "exports": "later"
    }
  },
  "devDependencies": {
    "benchmark": "*",
    "browserify": "^16.5.0",
    "jslint": "*",
    "mocha": "*",
    "moment": "^2.24.0",
    "should": ">=0.6.3",
    "sinon": "^8.1.1",
    "smash": "~0.0.8",
    "uglify-js": "*"
  },
  "license": "MIT",
  "scripts": {
    "test": "./node_modules/.bin/mocha test/**/*-test.js --reporter dot"
  }
}, null, 2));