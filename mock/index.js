/**
 * mock products
 */
var fs = require('fs');
var dummyjson = require('dummy-json');
var helpers = require('./helpers');

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

module.exports = function(templateName) {
	var template =  fs.readFileSync(__dirname + "/" + templateName + ".html", 'utf8')
	var result = dummyjson.parse(template, {
		helpers: helpers
	});
	// console.log(result);
	result = JSON.parse(result);
	return result;
}


