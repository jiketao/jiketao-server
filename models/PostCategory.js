var keystone = require('keystone');
var async = require('async');

/**
 * PostCategory Model
 * ==================
 */

var PostCategory = new keystone.List('PostCategory', {
	autokey: {
		from: 'name',
		path: 'key',
		unique: true
	}
});

PostCategory.add({
	name: {
		type: String,
		required: true
	}
});

PostCategory.relationship({
	ref: 'Post',
	path: 'categories'
});

PostCategory.schema.statics = {
	getAll: function(callBack) {
		keystone.list('PostCategory').model.find().sort('name').exec(function(err, results) {

			if (err || !results.length) {
				return callBack(err);
			}

			async.map(results, function(category, next) {

				keystone.list('Post').model.count().where('categories').in([category.id]).exec(function(err, count) {
					category.postCount = count;
					next(err, category);
				});

			}, function(err, results) {
				callBack(err, results);
			});

		});
	}
}

PostCategory.register();