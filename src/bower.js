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
  "main": "later.js",
  "license": "MIT"
}, null, 2));