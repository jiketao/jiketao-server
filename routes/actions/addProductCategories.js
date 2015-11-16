/**
 * 添加商品分类 action
 * ==============
 * Post /productCategories/new 
 * {
 * 	  name: 'category name'
 * }
 */
var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	var Model = keystone.list('ProductCategory').model;
	var item = new Model({
		name: req.body.name
	});

	item.save(function(err, result) {
		if (result) {
			res.json({
				success: true,
				data: result
			});
			return console.log('success', result);
		}
		if (err) {
			res.json({
				success: false,
				err: err
			})
			return console.log('error', result);
		}
	});

};
