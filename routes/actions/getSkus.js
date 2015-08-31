/** 
 * 获取 skus 

```
* method: GET
* url: /skus
*
* request: {
*    skus: [name<String>]
* }
*
* response: [
    {name: <String>, data: <Object>}, // 这里的Object的结构为key-value，可以任意在后台进行设置
    {name: <String>, data: <Object>},
    ...
  ]

```
 */

var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	var Model = keystone.list('Skus').model;

	console.log(req.params, req.query); 

	Model.find({
	    'id': { $in: [
	        '4ed3ede8844f0f351100000c',
	        '4ed3f117a844e0471100000d', 
	        '4ed3f18132f50c491100000e'
	    ]}
	}, function(err, docs){

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



