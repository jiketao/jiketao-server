/**
 * 更新商品 action 
 * ==============
 */
var keystone = require('keystone');
var async = require('async');
var _ = require('underscore');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	var body = req.body;
	var query = keystone.list('Product').model.findOne({
		_id: body.query._id
	});

	query.exec(function(err, result) {

		if (err) {
			next({
				success: false,
				err: err
			});
			return;
		}


		// 需要替换为深度拷贝的
		_.extendOwn(result, body.data);
		_.extendOwn(result.content, body.data.content);
		_.extendOwn(result.details, body.data.details);

		result.save(function(err, result) {

			if (result) {
				res.json({
					success: true,
					data: result
				});	
				return console.log('success', result);
			}

			if (err) {
				res.json({
					success: false,
					err: err
				})
				return console.log('error', result);
			}

		});

	});
};
