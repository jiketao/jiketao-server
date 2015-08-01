var keystone = require('keystone');
var Types = keystone.Field.Types;

var ShoppingItemCategory = new keystone.List('ShoppingItemCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});

ShoppingItemCategory.add({
	name: { type: String, required: true }
});

ShoppingItemCategory.relationship({ ref: 'ShoppingItem', path: 'categories' });

ShoppingItemCategory.register();