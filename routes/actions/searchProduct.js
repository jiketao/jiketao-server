/**
 * 搜索产品
 * ====================================
 *
 * method: GET
 * url: /products/search/:keyword
 * request: {
    pageNum: <Integer>, //分页页码
    pageCount: <Integer>, //每页数目
    [sortType]: <String>, //可选，根据什么数据排序。默认为"publishedDate"，按发布时间排序
    [sortDirection]: 1/-1 //可选，排序方向。默认为1。1为正序，-1为逆序
  }
 * response: {
    同`获取商品列表`返回结果
  }
 *
 * ====================================
 */
var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  var Model = keystone.list('Posts').model;

  res.json({
    success: true,
    data: {
      list: [],
      totalCount: 100
    }
  });
  
}