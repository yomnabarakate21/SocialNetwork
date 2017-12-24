var mysql = require('mysql');
var md5 = require('md5');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SocialNetwork"
});

var User = require('../models/user');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var data = [];
module.exports = function(app) {
  app.get('/login', function(req, res, next) {

    res.render('login.ejs');
    next();
  });


  app.post('/login', urlencodedParser, function(req, res) {
    var encrypt_pass = md5(req.body.password);
    con.query("SELECT * FROM MyUser WHERE email =? AND password =?", [req.body.name, encrypt_pass],
      function(err, rows, fields) {
        if (rows.length > 0)
         {
          console.log(rows[0].user_id);
          res.send({
           id: rows[0].user_id
         });
        }
        else {
          res.send(500, 'showAlert');

        }
      });

  });
}
