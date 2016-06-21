'use strict';
var runner = require('../runner');

module.exports = function(commitID, file) {
	return runner.execute(['git', 'show', commitID + ':' + file]);
}