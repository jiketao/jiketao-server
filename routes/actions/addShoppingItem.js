/**
 * 添加商品 action 
 * ==============
 */
var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'addshoppingItems';
	
	console.log(req.params, req.body.data);

	var Model = keystone.list('ShoppingItem').model;
	var item = new Model({
		title: 'helo',
		details: {
			price: '123.89',
			ext: 'asdfasd'
		},
		content: {
			brief: 'mbp',
			extended: 'so what'
		}
	});
	
	// for test
	Model.create();
	item.update();

	item.save(function(err, result) {

		if (result) {
			res.json(result);	
			return console.log('success', result);
		}

		if (err) {
			return console.log('error', result);
		}

	});

	// Render the view
};
