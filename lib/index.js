"use strict";

var _ = require('lodash');

var json2php = function (data, options) {
	options = _.extend({
		compress: true
	}, options);

	var _json2php,
		_compact;

	_compact = function (objOrArray) {
		var isArray = _.isArray(objOrArray);
		var result = isArray ? [] : {};

		_.each(objOrArray, function (v, k) {
			if (v !== undefined) {
				if (isArray) {
					result.push(v);
				} else {
					result[k] = v;
				}
			}
		});

		return result;
	};

	_json2php = function(obj) {
		switch (Object.prototype.toString.call(obj)) {
			case '[object Boolean]':
				return obj ? 'true' : 'false';
			case '[object String]':
				return "'" + obj.replace(/\\/g, '\\\\').replace(/\'/g, "\\'") + "'";
			case '[object Number]':
				return String(obj);
			case '[object Array]':
				return 'array(' + _compact(obj).map(_json2php).join(options.compress ? ',': ", ") + ')';
			case '[object Object]':
				var result = [];

				_.each(_compact(obj), function (v, k) {
					result.push(_json2php(k) + (options.compress ? "=>": " => ") + _json2php(v));
				});

				return "array(" + result.join(options.compress ? ',': ", ") + ")";
		}

		return 'null';
	};

	if (_.isObject(data) || _.isArray(data)) {
		data = _compact(data);
	}

	if (data === undefined) {
		return 'null';
	}

	data = JSON.parse(JSON.stringify(data)); // convert only JSON properties
	return _json2php(data);
};

module.exports = json2php;