/**
 * 获取 products 列表
 * ====================================
 *
 * method: GET
 * url: /products
 * request: {
    categoryId: <String>, // 分类的id
    pageNum: <Integer>, //分页页码
    pageCount: <Integer>, //每页数目
    [sortType]: <String>, //可选，根据什么数据排序。默认为"publishedDate"，按发布时间排序
    [sortDirection]: 1/-1 //可选，排序方向。默认为1。1为正序，-1为逆序
  }
 * response: {
    list: [
      {
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
          {name: <String>},
          {name: <String>}
          ...
        ]
      },
      ...
   ],
   totalCount: <Integer>
 }
 *
 * ====================================
 */
var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var Model = keystone.list('Products').model;

	res.json({
		success: true,
		data: {
			list: [],
			totalCount: 100
		}
	});

	
}