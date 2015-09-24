/**
 * 商品列表
 */

var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data = {
		items: [],
		page: 0
	}

	view.on('init', function(next) {
		var query = keystone.list('Product').model.find();
		query.exec(function(err, results) {
			locals.data.items = results;
			locals.data.items.forEach(function(it) {
				it.uid = it._id;
			});
			next(err);
		});
	});

	view.render('admin/products');
}
