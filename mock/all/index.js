/**
 * mock products
 */
var fs = require('fs');
var dummyjson = require('dummy-json');
var helpers = require('./helpers');

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var template = require("./template.html");

var result = dummyjson.parse(template, {
	helpers: helpers
});
console.log(result);
console.log(JSON.parse(result));
module.exports = result;


