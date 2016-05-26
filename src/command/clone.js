'use strict';
var runner = require('../runner');

module.exports = function(url) {
	return runner.execute(['git', 'clone', url]);
}