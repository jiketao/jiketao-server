var keystone = require('keystone');
var Types = keystone.Field.Types;

var Survey = new keystone.List('Survey');

Survey.add({
  title: {type: String},
  data: {type: String}
});

Survey.register();
