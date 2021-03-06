/**
 * 商品列表
 */

var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.nav = 'addProduct';
	locals.data = {
		items: [],
		page: 0
	}

	view.on('init', function(next) {
		next();
	});

	view.render('admin/addProduct');
}