/**
 * 搜索产品
 * ====================================
 *
 * method: GET
 * url: /products/search/:keyword
 * request: {
    pageNum: <Integer>, //分页页码
    pageCount: <Integer>, //每页数目
    category: <id>, // 类目id
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

    var page = req.query.pageNum || 1;
    var pageCount = req.query.pageCount || 10;
    var querys = req.params.keyword;
    querys = querys.split('-');
    
    console.log(querys, req.query);

    querys = querys.map(function(it) {
        return new RegExp(it, 'gi');
    })

    /**
     * 关键词过滤条件
     * @type {Object}
     */
    var queryObj = {
        title: {
            $in: querys
        }
    };

    /**
     * 类目过滤条件
     * @param  {[type]} req.params.category [description]
     * @return {[type]}                     [description]
     */
    if (req.params.category) {
        queryObj.categories = req.params.category
    }


    keystone.list('Product').model
    .find(queryObj)
    .skip((page - 1) * pageCount)
    .limit(pageCount)
    .exec(function(err, results) {
        res.json({
            success: true,
            data: results
        });
    });
}