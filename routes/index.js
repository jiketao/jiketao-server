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

	// GET Pages
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.get('/products/:id', routes.views.product);

	// GET APIS
	app.get('/skus', routes.actions.getSkus);
	app.get('/products/search/:keyword', routes.actions.searchProduct);
	app.get('/products/categories', routes.actions.getProductCategories);
	app.get('/products', routes.actions.getProducts);
	app.get('/products/:id/json', routes.actions.getProduct);
	app.get('/posts', routes.actions.getPosts);
	app.get('/posts/search/:keyword', routes.actions.searchPost);
	app.get('/posts/categories', routes.actions.getPostCategories);
	app.get('/posts/:id', routes.actions.getPost);

	// ADMIN
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);
	app.get('/admin', routes.admin.dashbord);
	app.get('/admin/products', routes.admin.products);
	app.get('/admin/product/new', routes.admin.addProduct);
	app.get('/admin/product/:id', routes.admin.updateProduct);
	app.post('/admin/product/new', routes.actions.addProduct);
	app.post('/admin/product/edit', routes.actions.updateProduct);

	// 调查列表
	app.get('/admin/surveys', routes.admin.surveys);

	app.delete('/admin/surveys/:id', routes.actions.deleteSurvey);
	app.post('/admin/surveys/new', routes.actions.addSurvey);

	app.get('/surveys/:id', routes.actions.getSurvey);

	// app.post('/admin/posts/categories', routes.actions.addPostCategories);
	// app.get( '/admin/add-post', routes.admin.addPost);
	// app.post('/admin/add-post', routes.actions.addPost);
	// app.get( '/admin/posts', routes.admin.posts);
};
