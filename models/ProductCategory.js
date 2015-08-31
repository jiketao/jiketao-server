/**
 * ProductCategory Model
 * ==================
 * @author  6174
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var ProductCategory = new keystone.List('ProductCategory', {});

/**
 * 目前只有一个 level 的分类
 */ 
ProductCategory.add({
	// 分类名称
	name: { type: String, required: true , unique: true },
});

ProductCategory.relationship({ ref: 'ShoppingItem', path: 'categories' });

ProductCategory.register();