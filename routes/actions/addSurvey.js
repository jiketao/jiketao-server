exports = module.exports = function(req, res) {
  req.busboy.on("file", function(fieldname, file, filename, encoding, mimetype) {
    res.json({
      msg: req.body.title + " 上传OK喔"
    });
  });
  req.pipe(req.busboy);
}
