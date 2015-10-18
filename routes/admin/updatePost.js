/**
 * 商品列表
 */

var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.nav = 'addPost';
	locals.data = {
		item: {},
		page: 0
	}

	var id = req.params.id;

	// 文章分类
	view.on('init', function(next) {
		var query = keystone.list('Post').model.findOne({_id: id});
		query.exec(function(err, results) {
			locals.data.item = results;
			next(err);
		});
	});

	view.render('admin/updatePost');
}
