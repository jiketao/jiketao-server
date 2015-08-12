/**
 * 投放数据
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * 投放数据 Model
 * ==========
 */

var Recommend = new keystone.List('Recommend');

Recommend.add({
	// 投放唯一id名称
	name: { type: Types.Name, required: true, index: true},
	// 投放数据
	data: {
		date: {type: Types.Date}
	}
});


Recommend.schema.statics = {
	create: function(data) {
		console.log('called static method');
	},
	getList: function(data) {
		console.log('get recommend data list');
	}
}

Recommend.register();
