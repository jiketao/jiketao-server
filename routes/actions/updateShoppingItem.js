/**
 * 更新商品 action 
 * ==============
 */
var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	var data = req.body;
	var query = keystone.list('ShoppingItem').model.findOne({
		_id: data.uid
	});

	query.exec(function(err, result) {

		if (err) {
			next({
				success: false,
				err: err
			});
			return;
		}
		// result
		// item.save(function(err, result) {

		// 	if (result) {
		// 		res.json({
		// 			success: true,
		// 			data: result
		// 		});	
		// 		return console.log('success', result);
		// 	}

		// 	if (err) {
		// 		res.json({
		// 			success: false,
		// 			err: err
		// 		})
		// 		return console.log('error', result);
		// 	}

		// });
	});
};
