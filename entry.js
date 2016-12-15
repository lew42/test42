console.log("test42/entry.js");

require("./something.test42.js");

console.log(process.cwd());

var tests = require.context("./", true, /\.test42\.js$/);
console.log(tests.keys());