'use strict';

var childproc = require('child_process'),
 	abs = require('abs'),
	exec = childproc.exec,
	execSync = childproc.execSync,
	spawn = childproc.spawn,
	Runner,
	noop,
	Q = require('q');

Runner = function(){
	this.baseDir = './';
};

noop = function(result){
	return result;
};

Runner.prototype.execute = function(command, parse, options) {
	var task = command.shift();
	var defer = Q.defer();
	var result = "";
	var executor = spawn(task, command, {
		cwd: abs(this.baseDir)
	});
	parse = parse || noop;
	executor.stdout.on('data', function (data) {
	    result += data;
	});
	executor.stderr.on('data', function (data) {
	    console.log('Error：\n' + data);
	});

	executor.on('close', function (code, signal) {
	    if (code === 0) {
	        defer.resolve(parse(result));
	    } else {
	        defer.reject(new Error(code));
	    }
	});
	return defer.promise;
}
var runner = new Runner();

module.exports = runner;


