/**
 * 获取产品详情
 *
 * ====================================
 * method: GET
 * url: /products/:id
 * request: {
    related_post_num: <Integer> // 返回和该商品相关文章的数目
   }
 * response: {
    title: <String>,
    details: {
      price: <Number>,
      priceRange: {
        max: <Number>,
        min: <Number>
      },
      pictures: [<String>, <String>, <String>], //商品图片
      upvote: <Integer>,
      ext: <Object> // 扩展规格说明数据，key-value
    },
    content: {
      brief: <String>,
      extended: <String>
    },
    categories: [
      {name: <String>, _id: <String>},
      {name: <String>, _id: <String>}
      ...
    ],
    posts: [ // 注意这里需要返回此件商品相关的文章数据
      {}, // 数据和获取文章列表里面单篇文章数据一致
      {},
      {}
    ]
  },
 *
 * ====================================
 */
var keystone = require('keystone');
var async = require('async');
var mock = require('../../mock');

exports = module.exports = function(req, res) {

  res.json({
    success: true,
    data: mock('product')
  });

  return;

}
