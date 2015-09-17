exports = module.exports = function(req, res) {
  console.log(req.body)
  res.json({
    msg: req.body.title + " 上传OK喔"
  });
}
