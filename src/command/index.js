'use strict';

var status = require('./status');
var log = require('./log');
var files = require('./ls-files');
var diff = require('./diff');
var clone = require('./clone');

module.exports.status = status;
module.exports.log = log;
module.exports.files = files;
module.exports.diff = diff;
module.exports.clone = clone;