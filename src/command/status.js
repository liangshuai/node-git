'use strict';
var runner = require('../runner');

module.exports = function() {
	return runner.execute(['git', 'status', '-s']);
}