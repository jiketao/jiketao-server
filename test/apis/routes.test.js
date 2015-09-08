var expect = require('chai').expect;
var assert = require('chai').assert;
var request = require('request');

var host = "http://127.0.0.1:3000";

describe('test/apis', function() {

	describe('GET /posts', function() {
		it('返回文章列表', function(done) {
			request(host + '/posts', function(err, response, body) {
				if (err) {
					console.log(err);
					assert(false, 'not response');
				} else {
					body = JSON.parse(body);
					expect(body.success).to.be.true;
				}
				done();				
			})
		});
	});

	describe('GET /posts/categories', function() {
		it("应该返回文章分类列表", function(done) {
			request(host + '/posts/categories', function(err, response, body) {
				if (err) {
					console.log(err);
					assert(false, 'not response');
				} else {
					// console.log(body);
					body = JSON.parse(body);
					expect(body.success).to.be.true;
				}
				done();
			})
		});
	});

	describe('GET /posts/:id', function() {
		it("应该根据 id 返回文章", function(done) {
			request(host + '/posts/iasdfasdfasd', function(err, response, body) {
				if (err) {
					console.log(err);
					assert(false, 'not response');
				} else {
					// console.log(body);
					body = JSON.parse(body);
					expect(body.success).to.be.true;
				}
				done();
			})
		});
	});

	describe('GET /posts/search/:keyword', function() {
		it("应该根据 keyword 返回匹配的文章", function(done) {
			request(host + '/posts/search/keyword', function(err, response, body) {
				if (err) {
					console.log(err);
					assert(false, 'not response');
				} else {
					body = JSON.parse(body);
					expect(body.success).to.be.true;
				}
				done();
			})
		});
	});

	describe('GET /skus', function() {
		it('应该返回skus列表', function(done) {
			request(host + '/skus', function(err, response, body) {
				if (err) {
					console.log(err);
					assert(false, 'not response');
				} else {
					body = JSON.parse(body);
					expect(body.success).to.be.true;
				}
				done();
			}) 
		});
	});

	describe('GET /products', function() {
		it('返回商品列表', function(done) {
			request(host + '/products', function(err, response, body) {
				if (err) {
					console.log(err);
					assert(false, 'not response');
				} else {
					body = JSON.parse(body);
					expect(body.success).to.be.true;
				}
				done();				
			})
		});
	});

	describe('GET /products/categories', function() {
		it("应该返回商品分类列表", function(done) {
			request(host + '/products/categories', function(err, response, body) {
				if (err) {
					console.log(err);
					assert(false, 'not response');
				} else {
					// console.log(body);
					body = JSON.parse(body);
					expect(body.success).to.be.true;
				}
				done();
			})
		});
	});

	describe('GET /products/:id', function() {
		it("应该根据 id 返回商品", function(done) {
			request(host + '/products/iasdfasdfasd', function(err, response, body) {
				if (err) {
					console.log(err);
					assert(false, 'not response');
				} else {
					// console.log(body);
					body = JSON.parse(body);
					expect(body.success).to.be.true;
				}
				done();
			})
		});
	});

	describe('GET /products/search/:keyword', function() {
		it("应该根据 keyword 返回匹配的商品", function(done) {
			request(host + '/products/search/keyword', function(err, response, body) {
				if (err) {
					console.log(err);
					assert(false, 'not response');
				} else {
					body = JSON.parse(body);
					expect(body.success).to.be.true;
				}
				done();
			})
		});
	});
});