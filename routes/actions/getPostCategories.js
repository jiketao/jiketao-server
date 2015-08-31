/**
 * 
 * 
 * 获取所有文章分类

	```
	* method: GET
	* url: /posts/categories
	* request: 无
	* response: [
	    {name: <String>},
	    {name: <String>},
	    {name: <String>},
	    ...
	  ]

	NOTE: 这个每个页面渲染的时候会通过全局变量的方式注入页面；也可以通过上面的请求进行获取。

 */
var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	var PostCategory = keystone.list('PostCategory').model;
	PostCategory.getAll(function(err, results) {
		if (err) {
			res.json({
				success: false,
				err: err
			});
			return;
		}

		res.json({
			success: true,
			data: results
		})
	});
}