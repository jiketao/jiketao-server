var nodeXj = require("xls-to-json");
nodeXj({
  input: "104_104_0.xls",
  output: "xls.json",
  sheet: "Sheet1"
}, function() {
})

// var json = require("./xls.json")
// console.log(json);
