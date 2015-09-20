var keystone = require('keystone');
var Model = keystone.list('Survey').model;

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);

  if (req.method === "DELETE") {
    Model.remove({_id: req.params.id}, function(err, result) {
      if (err) return res.send(500, {result: "fail:", msg: "删除失败"});
      res.send({result: "success", msg: "删除成功"});
    })
  } else {
    res.send(400, {msg: "What the hell are you doing here?"});
  }
}
