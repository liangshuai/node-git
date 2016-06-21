'use strict';
var runner = require('../runner');
var parser = require('../parse/status-parser');


module.exports = function() {
	return runner.execute(['git', 'status', '-s'], parser);
}