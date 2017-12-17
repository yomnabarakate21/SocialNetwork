//require the post model for using it.
const Posts = require('../models/post');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {

  app.get('/post', function(req, res) {

    //TO DO
  });
  app.post('/post', urlencodedParser, function(req, res) {
    //TO DO

  });


}
