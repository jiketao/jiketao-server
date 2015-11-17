/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var surveyServer = require("./survey") ;

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	actions: importRoutes('./actions'),
	admin: importRoutes('./admin')
};

var CLIENT_VERSION = "0.0.3";

function onClientVersionBump() {
	// TODO: 客户端发布的时候更新 CLIENT_VERSION 变量
}

// Setup Route Bindings
exports = module.exports = function(app) {
	surveyServer.init(); // 给调查问卷单独起一个服务器

	app.use(function(req, res, next) {
		res.locals.CLIENT_VERSION = CLIENT_VERSION;
		res.locals.CDN_PATH = "/cdn"
		next();
	});

	// GET APIS
	app.get('/api/skus', routes.actions.getSkus);
	app.get('/api/products/search/:keyword', routes.actions.searchProduct);
	app.get('/api/products/categories', routes.actions.getProductCategories);
	app.get('/api/products', routes.actions.getProducts);
	app.get('/api/products/:id/json', routes.actions.getProduct);
	app.get('/api/posts', routes.actions.getPosts);
	app.get('/api/posts/search/:keyword', routes.actions.searchPost);
	app.get('/api/posts/categories', routes.actions.getPostCategories);
	app.get('/api/posts/:id', routes.actions.getPost);

	// GET Pages
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.get('/products/:id', routes.views.product);
	app.get('/posts/:id', routes.views.post);


	app.delete('/products/:id', routes.actions.deleteProduct);

	// ADMIN
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	app.get('/admin', routes.admin.dashbord);
	app.get('/admin/products', routes.admin.products);
	app.get('/admin/product/new', routes.admin.addProduct);
	app.get('/admin/product/:id', routes.admin.updateProduct);
	app.post('/admin/product/new', routes.actions.addProduct);
	app.post('/admin/product/edit', routes.actions.updateProduct);
	app.post('/admin/productCategories/new', routes.actions.addProductCategories);

	// 调查列表
	app.get('/admin/surveys', routes.admin.surveys);

	app.delete('/admin/surveys/:id', routes.actions.deleteSurvey);
	app.post('/admin/surveys/new', routes.actions.addSurvey);

	app.get('/surveys/:id', routes.actions.getSurvey);

	// app.post('/admin/posts/categories', routes.actions.addPostCategories);
	app.get( '/admin/post/new', routes.admin.addPost);
	app.post('/admin/post/new', routes.actions.addPost);
	app.post('/admin/post/edit', routes.actions.updatePost);
	app.get('/admin/post/:id', routes.admin.updatePost);
	app.get( '/admin/posts', routes.admin.posts);
};
