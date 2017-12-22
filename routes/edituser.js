var mysql = require('mysql');
var md5 = require('md5');
//var io =require("socket.io")(http);
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SocialNetwork"
});


var x;
var id;
var sleep = require('thread-sleep');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
module.exports = function(app) {
  app.get('/editprofile/:id', function(req, res, next) {
    id = req.params.id;
    con.query("SELECT * FROM MyUser WHERE MyUser.user_id=?", req.params.id, function(err, rows, fields) {

      x = rows[0].password;



      if (rows != "") {


        res.render('edituser.ejs', {
          data: rows
        });
      }


    });
  });




  app.post('/user/editprofile/:id', function(req, res, next) {
    if (req.files.image) {
      console.log('yarab');
    }
    if (req.body.lastname != "") {
      console.log('uadating lastname: ' + req.body.lastname);
      con.query("UPDATE MyUser SET lastname=? WHERE MyUser.user_id=?", [req.body.lastname, id]);

      sleep(1000);
    }


    if (req.body.firstname != "") {
      con.query("UPDATE MyUser SET firstname=? WHERE MyUser.user_id=?", [req.body.firstname, id]);
      sleep(1000);
    }

    if (req.body.phone_number1 != "") {
      console.log('uadating: ' + req.body.lastname);
      con.query("UPDATE MyUser SET phone_number1=? WHERE MyUser.user_id=?", [req.body.lastname, id]);

      sleep(1000);
    }

    if (req.body.hometown != "") {
      console.log('uadating: ' + req.body.hometown);
      con.query("UPDATE MyUser SET hometown=? WHERE MyUser.user_id=?", [req.body.hometown, id]);

      sleep(1000);
    }

    if (req.body.password_1 != "" && req.body.password != "") {
      var pass = md5(req.body.password_1);
      
      if (pass == x) {
        console.log('uadating password: ' + req.body.password_1);

        con.query("UPDATE MyUser SET password=? WHERE MyUser.user_id=?", [pass, id]);
      } else {
        res.status(500).send('showAlert');

      }
      sleep(1000);
    }



  });

};
