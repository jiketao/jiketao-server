var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var PostCategory = new keystone.List('PostCategory', {
	autokey: { from: 'name', path: 'key', unique: true }
});

PostCategory.add({
	name: { type: String, required: true }
});

PostCategory.relationship({ ref: 'Post', path: 'categories' });

PostCategory.schema.statics = {
	getAll: function(callBack) {
		keystone.list('PostCategory').model.find().sort('name').exec(function(err, results) {
		
			if (err || !results.length) {
				return callBack(err);
			}
			
			locals.data.categories = results;
			
			async.map(locals.data.categories, function(category, next) {
				
				keystone.list('Post').model.count().where('categories').in([category.id]).exec(function(err, count) {
					category.postCount = count;
					next(err);
				});
				
			}, function(err, results) {
				callBack(err, results);
			});
			
		});
	}
}

PostCategory.register();
