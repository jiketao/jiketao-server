var busboy = require("connect-busboy");
var app = require("express")();
var path = require("path");
var UPLOAD_DIR = "../public/upload/"
var fs = require("fs");
var uuid = require("uuid");
var parseXlsx = require('excel');
var bodyParser = require("body-parser");

var keystone = require('keystone');
var Model = keystone.list('Survey').model;

exports.init = function() {
  var savePath = path.join(__dirname, UPLOAD_DIR, uuid.v4() + ".xls");
  var title = null;
	app.use(busboy());

	app.get("/", function(req, res) {
		res.send("<form action='/survey', method='POST' enctype='multipart/form-data'>" +
                "<div>调查问卷标题：<input type='text' name='title'/></div>" +
							  "<div>上传Excel文件: <input type='file' name='survey'></div>" +
                "<hr>" +
								"<button type='submit'>提交</button>" +
		 					"</form>")
	});

	app.post("/survey", function(req, res, next) {
    var origin = req.headers.origin.replace(/:\d+$/, "");
		req.busboy.on("file", function(filename, file) {
      var saveFile = fs.createWriteStream(savePath);
      saveFile.on("close", function() {
        parseFileAndRemove(function(err) {
          if (err) {
            return res.json({msg: err});
          }
          res.redirect(origin + "/admin/surveys");
        });
      })
      file.pipe(saveFile);
		})
    req.busboy.on("field", function(fieldname, field) {
      title = field;
    })
		req.pipe(req.busboy);
	});

  function parseFileAndRemove(callback) {
    parseXlsx(savePath, function(err, data) {
      if (err) return callback(err);
      var survey = new Model({
        title: title,
        data: JSON.stringify(data)
      });
      survey.save(function(err, result) {
        fs.unlink(savePath, function(err2) {
          if (err) return callback(err);
          if (err2) return callback(err2);
          callback();
        })
      })
    })
  }

  app.listen(9000);
}
