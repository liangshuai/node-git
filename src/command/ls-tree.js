'use strict';
var runner = require('../runner');
var parse = require('../parse/file-tree-parser');

module.exports = function(commitID) {
	return runner.execute(['git', 'ls-tree', '--name-only', '-r', commitID], parse);
}