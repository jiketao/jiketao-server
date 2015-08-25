/**
 * 投放数据
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * 投放数据 Model
 * ==========
 */

var Skus = new keystone.List('Skus');

Skus.add({
	// 投放唯一id名称
	name: { type: Types.Name, required: true, index: true},
});

Skus.schema.add({
	data: {}
});


Skus.schema.statics = {
	create: function(data) {
		console.log('called static method');
	},
	getList: function(data) {
		console.log('get Skus data list');
	}
}

Skus.register();
