/**
 * 商品列表
 */

var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.nav = 'surveys';
	locals.data = {surveys: []}

	view.on('init', function(next) {
		keystone.list('Survey').model.find({}, {title: 1}, function(err, items) {
			locals.data.surveys = items;
			console.log(items);
			next(err);
		});
	});

	view.render('admin/surveys');
}
