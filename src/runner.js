'use strict';

var childproc = require('child_process'),
	exec = childproc.exec,
	execSync = childproc.execSync,
	spawn = childproc.spawn,
	Runner = null,
	Q = require('q');

Runner = function(){
	this.baseDir = './';
}

Runner.prototype.execute = function(command, options) {
	var task = command.shift();
	var defer = Q.defer();
	var result = "";
	var free  = spawn(task, command, {
		cwd: this.baseDir
	});
	free.stdout.on('data', function (data) {
	    result += data;
	    console.log(result);
	});
	free.stderr.on('data', function (data) {
	    console.log('Error：\n' + data);
	});

	free.on('close', function (code, signal) {
	    if (code === 0) {
	        defer.resolve(result);
	    } else {
	        defer.reject(new Error(code));
	    }
	});
	return defer.promise;
}

var runner = new Runner();

module.exports = runner;


