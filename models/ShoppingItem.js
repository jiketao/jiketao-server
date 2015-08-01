/**
 * ShoppingItem Model
 * ==================
 * @author  6174
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

var ShoppingItem = new keystone.List('ShoppingItem', {
	map: { name: 'title'},
	autokey: { path: 'slug', from: 'title'}
});

ShoppingItem.add({
	title: {type: String, require: true},
	details: {
		price: {type: String},
		ext: {type: String}
	},
	content: {
		brief: {type: String},
		extended: {type: String}
	},
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