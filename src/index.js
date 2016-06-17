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

var git = new Git();

git.log().then(list => {
	console.log(list);
});


module.exports = Git;