/**
 * 添加文章页面
 */

var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.nav = 'addPost';
	locals.data = {};

	view.on('init', function(next) {
		next();
	});

	view.render('admin/addPost');

}