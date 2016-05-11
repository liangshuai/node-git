'use strict';
var runner = require('../runner');

var parse = function(diff) {

	var filename;
	var isEmpty = true;
	var files = {};

	diff.split( "\n" ).forEach(function( line, i ) {
		if ( !line || line.charAt( 0 ) === "*" ) {
			return;
		}

		if ( line.charAt( 0 ) === "d" ) {
			isEmpty = false;
			filename = line.replace( /^diff --(?:cc |git a\/)(\S+).*$/, "$1" );
			files[ filename ] = [];
		}

		files[ filename ].push( line );
	});

	return isEmpty ? null : files;
}


module.exports = function() {
	return runner.execute(['git', 'diff', '885edf7dc8', '46da05f696e'], parse);
}