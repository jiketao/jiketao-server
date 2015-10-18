/**
 * 获取文章详情
 * ====================================
 *
 * method: GET
 * url: /posts/:id
 * request: 无
 * response: {
    upvote: <Integer>, // 点赞数目
    title: <String>,
    state: <String> // draft（草稿）| published（发布）,
    author: {
      name: <String>,
      email: <String>
    },
    publishedDate: <String>,
    cover: <String> //  e.g. /images/1.png
    content: {
      brief: <String>,
      extended: <String>
    },
    categories: [
      {name: <String>, _id: <String>},
      {name: <String>, _id: <String>}
      ...
    ],
    products: [ // 注意这里需要返回这篇文章相关的商品数据
      {}, // 数据和获取商品列表里面单个商品数据一致
      {}, 
      {}
      ...
    ]
  }
 *
 * ====================================
 */

var keystone = require('keystone');
var async = require('async');
var mock = require('../../mock');

exports = module.exports = function(req, res) {
  var id = req.params.id;
  
	var query = keystone.list('Post').model.findOne({
    _id: id
  });

  query.exec(function(err, result) {
    if (err) {
      return res.json({
        success: false,
        err: err
      });
    }
    
    res.json({
      success: true,
      data: result
    });
  });
}
