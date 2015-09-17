/**
 * 商品列表
 */

var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.nav = 'addSurvey';
	locals.data = {
		surveys: []
	}

	view.on('init', function(next) {
		next();
	});

	view.render('admin/addSurvey');
}
