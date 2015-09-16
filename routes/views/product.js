var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'product';

	locals.data = {
		items: []
	}

	view.on('init', function(next) {
		keystone.list('Product').model.find({_id: req.params.id}).exec(function(err, result) {
			if (err || !result) {
				return next(err);
			}

			locals.data.product = result;
		});
	});


	// API完成以后要把下面两行去掉
	var mock = require('../../mock');
	locals.data.product = mock("product");

	view.render('product');

}
