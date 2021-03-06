var keystone = require('keystone');
var markdown = require("markdown").markdown

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.nav = "文章详情";
	 
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Post').model.findOne({
			_id: req.params.id
		});
		// }).populate('author categories');
		
		q.exec(function(err, result) {
			if (result) {
				result.content.extended = markdown.toHTML(result.content.extended)
			}
			locals.data = {post: result};
			next(err);
		});
		
	});
	
	// Load other posts
	// view.on('init', function(next) {
		
	// 	var q = keystone.list('Post').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');
		
	// 	q.exec(function(err, results) {
	// 		locals.data.posts = results;
	// 		next(err);
	// 	});
		
	// });
	
	// Render the view
	view.render('post');
	
};
