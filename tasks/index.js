'use strict';

var path = require('path');
var convert = require('./../lib');

module.exports = function (grunt) {
	grunt.registerMultiTask('json2php', function () {
		var options = this.options({
            root: process.cwd(),

			cover: function (phpArrayString, dest) {
				return '<?php\n\nreturn ' + phpArrayString + ';\n\n?>';
			}
		});

		this.files.forEach(function (f) {
			f.src.filter(function (filepath) {
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				}

                return true;
			}).forEach(function (srcFilePath) {
				var json = grunt.file.readJSON(path.resolve(options.root, srcFilePath));
				var phpArrayString = convert(json, options);

				grunt.file.write(f.dest, options.cover(phpArrayString, f.dest));
				grunt.log.writeln('File "' + f.dest + '" created.');
			});
		});
	});
};
