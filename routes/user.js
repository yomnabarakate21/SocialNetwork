//require the user model for using it.
const User = require('../models/user');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {

  app.get('/user', function(req, res) {

    //TO DO
  });
  app.post('/user', urlencodedParser, function(req, res) {
    //TO DO

  });


}
