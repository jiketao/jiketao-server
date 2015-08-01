var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'shoppingItem';

	locals.data = {
		items: []
	}

	view.on('init', function(next) {
		keystone.list('ShoppingItem').model.find().exec(function(err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.data.items = results;
		});
	});

	view.render('shoppingItem');

}