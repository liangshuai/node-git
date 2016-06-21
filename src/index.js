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
var git = new Git('../');

git.diff('HEAD', '8db731d58b7880147', 's').then(response => {
	console.log(response);
})

module.exports = Git;