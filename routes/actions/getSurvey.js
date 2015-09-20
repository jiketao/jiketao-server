var keystone = require('keystone');
var Model = keystone.list('Survey').model;

exports = module.exports = function(req, res) {
  var locals = res.locals;
  var view = new keystone.View(req, res);
  locals.data = {};

  view.on("init", function(next) {
    Model.findOne({_id: req.params.id}, function(err, result) {
      if (err || !result) return res.sendStatus(404);
      locals.data.survey = result;
      next();
    })
  })

  view.render("survey");
}
