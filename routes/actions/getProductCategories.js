/**
 * 获取商品分类
 * ====================================
 *
 * method: GET
 * url: /products/categories
 * request: 无
 * response: [
    {name: <String>, _id: <String>},
    {name: <String>, _id: <String>},
    {name: <String>, _id: <String>}
    ...
   ]

 * NOTE: 这个每个页面渲染的时候会通过全局变量的方式注入页面；也可以通过上面的请求进行获取。
 *
 * ====================================
 */
var keystone = require('keystone');
var async = require('async');
exports = module.exports = function(req, res) {
    var locals = res.locals;
    keystone.list('ProductCategory').model.find().exec(function(err, results) {
        if (err) {
            return res.json({
                success: false,
                err: err
            });
        }
        res.json({
            success: true,
            data: results
        });
    })
}