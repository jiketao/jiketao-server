/**
 * 添加商品 action
 * ==============
 */
var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var Model = keystone.list('Product').model;
	var item = new Model(req.body);

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
