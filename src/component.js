var later = require("../index");

console.log(JSON.stringify({
  "name": "later2",
  "version": later.version,
  "main": "./later.js"
}, null, 2));