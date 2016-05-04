'use strict';
var runner = require('../runner');

var Status = function(symbol) {
	var mapping = {
			'??': 'notAdded',
			'M': 'modified',
			'D': 'deleted',
			'A': 'created',
			'UU': 'conflicted',
			'AM': 'createdAndModified',
			'MM': 'stagedAndModified'
		},
		current = mapping[symbol];

	return function(files, result) {
		if(!result[current]){
			result[current] = [];
		}
		result[current].push(files);
	}
}
function parse(result) {
	var lines = result.trim().split('\n');
	var line = '';
	var handler;
	var result = {};

	while (line = lines.shift()) {
		line = line.trim().match(/(\S+)\s+(.*)/);
	    if(line && (handler = Status([line[1]]))) {
	    	handler(line[2], result);
	    }
	}
	return result;
}

module.exports = function() {
	return runner.execute(['git', 'status', '-s'], parse);
}