/**
 * ShoppingItemCategory Model
 * ==================
 * @author  6174
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var ShoppingItemCategory = new keystone.List('ShoppingItemCategory', {
	autokey: { path: 'key', from: 'name',  unique: true }
});

/**
 * 目前只有一个 level 的分类
 */ 
ShoppingItemCategory.add({
	
	// 分类名称
	name: { type: String, required: true },

	// 父级分类
	// parent: { type:}

	// 分类级别
	// level: { type: Number }
});

ShoppingItemCategory.relationship({ ref: 'ShoppingItem', path: 'categories' });

ShoppingItemCategory.register();