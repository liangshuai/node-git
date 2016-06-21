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

module.exports = Git;