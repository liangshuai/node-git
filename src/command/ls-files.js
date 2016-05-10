'use strict';
var runner = require('../runner');

/**

result format

{
	"files": [".gitignore", "package.json"],
	"src": {
		"command": {
			"files": ["diff.js", "index.js", "init.js", "log.js", "status.js"]
		},
		"files": ["git.js", "index.js", "runner.js"]
	}
}

*/
var parse = function(output) {
	var pathArr = output.trim().split('\n');
	var forEach = [].forEach;
	var result = {};

	forEach.call(pathArr, function(item) {
		var itemArr = item.trim().split('/');
		var len = itemArr.length;
		itemArr.reduce(function(prev, curr, index) {
			console.log(len, index);
			if(index === len - 1) {
				prev['files'] || (prev['files'] = []);
				prev['files'].push(curr);
				return prev;
			}
			if(!prev[curr]){
				prev[curr] = {};
			}
			
			return prev[curr];
		}, result);
	});
	console.log(JSON.stringify(result));
	
}

module.exports = function() {
	return runner.execute(['git', 'ls-files'], parse);
}