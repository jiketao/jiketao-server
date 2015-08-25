/**
 * ProductCategory Model
 * ==================
 * @author  6174
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var ProductCategory = new keystone.List('ProductCategory', {
	autokey: { path: 'key', from: 'name',  unique: true }
});

/**
 * 目前只有一个 level 的分类
 */ 
ProductCategory.add({
	
	// 分类名称
	name: { type: String, required: true },

	// 父级分类
	// parent: { type:}

	// 分类级别
	// level: { type: Number }
});

ProductCategory.relationship({ ref: 'ShoppingItem', path: 'categories' });

ProductCategory.register();