'use strict';
var runner = require('../runner');
var parse = require('../parse/file-tree-parser');

module.exports = function() {
	return runner.execute(['git', 'ls-files'], parse);
}