'use strict';
var runner = require('../runner');

module.exports = function() {
	return runner.execute(['git', 'log', 'master']);
}