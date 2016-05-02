'use strict';

var runner = require('./runner');
var command = require('./command');
var Git = function(baseDir) {
	runner.baseDir = baseDir;
}

Git.prototype = command;
Git.prototype.constructor = Git;

// Test
// var git = new Git('../');
// git.status().then(function(result) {
// 	console.log(result);
// });

module.exports = Git;