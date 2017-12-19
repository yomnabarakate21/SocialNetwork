var http = require('http');
var mysql = require('../models/mysql-connection.js');
var User = require('../models/user.js');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var checkNullString = require('check-null-string');

var user = new User();



module.exports = function(app){
app.get('/search', urlencodedParser, function(req, res)
{


res.render('search.ejs'
);
}
);


}
