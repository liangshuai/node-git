'use strict';

var status = require('./status');
var log = require('./log');
var files = require('./ls-files');
var tree = require('./ls-tree');
var diff = require('./diff');
var clone = require('./clone');
var show = require('./show');
var checkout = require('./checkout');

module.exports.status = status;
module.exports.log = log;
module.exports.files = files;
module.exports.tree = tree;
module.exports.diff = diff;
module.exports.clone = clone;
module.exports.show = show;
module.exports.checkout = checkout;
