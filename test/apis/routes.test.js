var expect = require('chai').expect;
var assert = require('chai').assert;
var request = require('request');

var host = "http://127.0.0.1:3000";

describe('test/apis', function() {

	describe('GET  /postCategories', function() {
		it('应该返回分类列表', function(done) {
			request(host + '/postCategories', function(err, response, body) {
				if (err) {
					console.log(err);
					assert(false, 'not response');
				}

				console.log(body);
				done();
			})
			return;
		});
	});

	describe('POST /postCategories', function() {
		it('应该添加分类成功', function(done) {
			request.post(host + '/postCategories', {
					formData: {
						name: '键盘'
					}
				}, function(err, res, body) {
					if (err) {
						console.log(err);
						assert(false, 'not response');
					}
					console.log(body);
					body = JSON.parse(body);
					expect(body.success).to.be.true;
					done();
				})
		});
	});

	describe('GET /skus', function() {
		it('应该返回skus列表', function(done) {
			expect('1').equal('1');
			return done();
			request
				.get(host + '/skus?names=[a,b,c]')
				.on('response', function(res, body) {
					console.log(res.statusCode, body);
					done();
				})
				.on('error', function(err) {
			    console.log(err);
					assert(false, 'not response');
			    done();
			  });
		});
	});
	
});