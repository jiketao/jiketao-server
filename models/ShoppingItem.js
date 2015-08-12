/**
 * ShoppingItem Model
 * ==================
 * @author  6174
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var ShoppingItem = new keystone.List('ShoppingItem', {
	map: { name: 'title'},
	autokey: { path: 'slug', from: 'title'},
	autokey: { path: 'uid', from: '_id'}
});

ShoppingItem.add({

	// 商品标题
	title: {type: String, require: true},

	// 商品 sku 信息详情
	details: {

		// 价格
		price: {type: String},

		// 价格范围
		priceRange: {
			max: {type: String},
			min: {type: String}
		},

		// 商品图片
		picUrl: {type: String},

		// 赞
		upvote: {type: Number},

		// 扩展字段 json stringify 格式
		ext: {type: String}
	},

	// 商品描述信息
	content: {
		// 简要描述
		brief: {type: String},

		extended: {type: String}
	},

	// 商品分类信息
	categories: {
		type: Types.Relationship, 
		ref: 'ShoppingItemCategory', 
		many: true
	}
});

ShoppingItem.schema.methods = {
	update: function(data) {
		console.log('called object method');
	}
}

ShoppingItem.schema.statics = {
	create: function(data) {
		console.log('called static method');
	}
}

ShoppingItem.register();