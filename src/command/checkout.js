'use strict';
var runner = require('../runner');

module.exports = function(targetCommitID) {
	return runner.execute(['git', 'checkout', targetCommitID]);
};