/**
 * 添加商品分类 action 
 * ==============
 */
var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	console.log(req.params, req.body.data);

	var Model = keystone.list('PostCategory').model;
	var item = new Model({
		name: "键盘"
	});

	item.save(function(err, result) {

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
	
};
