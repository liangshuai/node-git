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


git.checkout('8db731d58b7880147bb8f7559cdfe0218535dfdb').then(result =>{
	console.log('checkout complete');
});

module.exports = Git;