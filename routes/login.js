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
//user= new User();
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var data = [];
module.exports = function(app) {
  app.get('/login', function(req, res, next) {

    res.render('login.ejs');
    next();
  });


  app.post('/login', urlencodedParser, function(req, res, next) {
    var encrypt_pass = md5(req.body.password);
    console.log('signing up  ' + req.body.name + ' ' + req.body.password);

    con.query("SELECT user_id FROM MyUser WHERE (MyUser.email =? AND MyUser.password =? ) ", [req.body.name, encrypt_pass],
      function(err, rows, fields) {
        if (rows.length > 0) {

          console.log({
            id: rows[0].user_id
          });
          res.send({
            id: rows[0].user_id
          });
        } else {
          //  alert('wrong username or pass');
          res.send(500, 'showAlert');
          console.log('fashlaaa');

        }


      });

  });
}
