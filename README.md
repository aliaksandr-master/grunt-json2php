[![npm](http://img.shields.io/npm/v/grunt-json2php.svg?style=flat-square)](https://www.npmjs.com/package/grunt-json2php)
[![npm](http://img.shields.io/npm/l/grunt-json2php.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/aliaksandr-pasynkau/grunt-json2php.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/grunt-json2php)
[![devDependency Status](https://david-dm.org/aliaksandr-pasynkau/grunt-json2php/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/grunt-json2php#info=devDependencies)
[![Build Status](https://travis-ci.org/aliaksandr-pasynkau/grunt-json2php.svg?branch=master&style=flat-square)](https://travis-ci.org/aliaksandr-pasynkau/grunt-json2php)
[![Coverage Status](https://img.shields.io/coveralls/aliaksandr-pasynkau/grunt-json2php.svg?style=flat-square)](https://coveralls.io/r/aliaksandr-pasynkau/grunt-json2php?branch=master)

# grunt-json2php

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aliaksandr-pasynkau/grunt-json2php?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Grunt plugin for convert json file to php file with associative array.

## Getting Started
This plugin requires Grunt `~0.4.x`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-excel-vocabulary --save
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json2php');
```

## The "json2php" task

### Overview
In your project's Gruntfile, add a section named `json2php` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json2php: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.root
Type: `String`
Default value: `process.cwd()`

if you need put your translation excel files somewhere in file system, not in process.cwd

#### options.compress
Type: `String`
Default value: `false`

```php
<?php

return array("a" => "b", "c" => "d");

?>
```

if true then all whitespaces will remove
```php
<?php

return array("a"=>"b","c"=>"d");

?>
```

#### options.cover
Type: `Function`
Default:
```js
cover: function (phpArrayString, destFilePath) {
    return '<?php\n\nreturn ' + phpArrayString + ';\n\n?>';
}
```
add php file cover.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  json2php: {
    convert: {
      expand: true,
      cwd: 'examples',
      dest: '.tmp',
      ext: '.php',
      src: [
        '**/*.json'
      ]
    }
  },
});
```
