'use strict';
var runner = require('../runner');
var diff2Html = require('diff2html').Diff2Html;
var summaryParser = require('../parse/status-parser');
// var parse = function(diff) {

	// var filename;
	// var isEmpty = true;
	// var files = {};

	// diff.split( "\n" ).forEach(function( line, i ) {
	// 	if ( !line || line.charAt( 0 ) === "*" ) {
	// 		return;
	// 	}

	// 	if ( line.charAt( 0 ) === "d" ) {
	// 		isEmpty = false;
	// 		filename = line.replace( /^diff --(?:cc |git a\/)(\S+).*$/, "$1" );
	// 		files[ filename ] = [];
	// 	}

	// 	files[ filename ].push( line );
	// });

	// return isEmpty ? null : files;
// }


module.exports = function(commitA, commitB, mode) {
	var parser = mode === 's' ? summaryParser : diff2Html.getJsonFromDiff;
	var command = ['git', 'diff', commitA, commitB];
	mode === 's' && command.push('--name-status');

	return runner.execute(command, parser);
}