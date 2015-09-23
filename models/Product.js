/**
 * Product Model
 * ==================
 * @author  6174
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
	map: { name: 'title'},
	autokey: { path: 'slug', from: 'title'},
	autokey: { path: 'uid', from: '_id'}
});

Product.add({

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

		// 规格说明
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
		ref: 'ProductCategory',
		many: true
	}
});

/**
 * 通过schema来添加array
 */
Product.schema.add({
	details: {
		skus: [{
			key: String,
			value: String
		}]
	}
})

Product.schema.methods = {
	update: function(data) {
		console.log('called object method');
	}
}

Product.schema.statics = {
	create: function(data) {
		console.log('called static method');
	}
}

Product.register();
