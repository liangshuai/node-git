/**
* Execute Git command by Node.js
*/

'use strict';

var Git = require('./git');
var git = new Git();

git.status().then(function(result) {
	console.log(result);
});

git.log().then(function(result) {
	console.log(result);
});