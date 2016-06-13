'use strict';

var runner = require('./runner');
var command = require('./command');
var Git = function(baseDir) {
	runner.baseDir = baseDir;
};

Git.prototype = command;
Git.prototype.constructor = Git;
Git.prototype.setBaseDir = function(baseDir) {
	runner.baseDir = baseDir;
	return this;
}

var git = new Git("../");
git.diff('8c5a152e9864c', '3484202d6acf4', 's').then(response => {
	console.log(response)
});

module.exports = Git;