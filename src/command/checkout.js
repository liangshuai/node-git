'use strict';
var runner = require('../runner');

module.exports = function(targetCommitID) {
	runner.execute(['git', 'checkout', targetCommitID]);
};