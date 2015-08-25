/**
 * 商品列表
 */

var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.nav = 'addItem';
	locals.data = {
		item: {},
		page: 0
	}

	var id = req.params.id;

	// 商品分类编辑
	view.on('init', function(next) {

		var query = keystone.list('Product').model.findOne({_id: id});

		query.exec(function(err, results) {
			locals.data.item = results;
			next(err);
		});
	});
	
	view.render('admin/updateProduct');
}