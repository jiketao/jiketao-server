/**
 * 获取文章列表
 * ====================================
 *
 * method: GET
 * url: /posts
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
          {name: <String>},
          {name: <String>}
          ...
        ]
      },
      ...
    ],
    totalCount: <Integer> // 符合查询条件的所有文章的数目，用来做分页
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