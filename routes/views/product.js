var keystone = require('keystone');
var async = require('async');
var markdown = require("markdown").markdown

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'product';

	locals.data = {
		items: []
	}

	view.on('init', function(next) {
		keystone.list('Product').model.findOne({_id: req.params.id}).exec(function(err, result) {
			result = result.toJSON();
			makeUp(result);
			locals.data.product = result;
			return next(err);
		});
	});


	view.render('product');

	function makeUp(product) {

		// 图片链接解析
		product.details.pictures = product.details.picUrl.split("\n");

		// 规格参数解析
		var ext = product.details.ext || ""
		var exts = ext.split("\n")
		var extJSON = {}
		exts.forEach(function(item) {
			var kv = item.split("-")
			extJSON[kv[0]] = kv[1] || "无";
		})
		product.details.ext = extJSON

		// 文章列表
		product.posts = []; // 暂时没有

		// markdown内容
		product.content.extended = markdown.toHTML(product.content.extended)
	}

}
