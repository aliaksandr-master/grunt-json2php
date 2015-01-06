
"use strict";

var convert = require('./lib');

var object = {z: undefined, y: function () {}, a: 1, b: {}, c: "3", d: null, e: true, f: false, g: [], h: [1, "2", true, false, null], i: { a: 1, b: "2", c: true, d: false, e: null}};
var objectPhp = 'array("a" => 1, "b" => array(), "c" => "3", "d" => null, "e" => true, "f" => false, "g" => array(), "h" => array(1, "2", true, false, null), "i" => array("a" => 1, "b" => "2", "c" => true, "d" => false, "e" => null))';
var objectPhpCompact = 'array("a"=>1,"b"=>array(),"c"=>"3","d"=>null,"e"=>true,"f"=>false,"g"=>array(),"h"=>array(1,"2",true,false,null),"i"=>array("a"=>1,"b"=>"2","c"=>true,"d"=>false,"e"=>null))';

module.exports['big object'] = function (test) {
	test.deepEqual(convert(object), objectPhp);
	test.done();
};

module.exports['empty'] = function (test) {
	test.deepEqual(convert(object, {compress: true}), objectPhpCompact);
	test.done();
};
