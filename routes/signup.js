var mysql = require('mysql');
var md5 = require('md5');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SocialNetwork"
});
var sleep = require('thread-sleep');
var User = require('../models/user');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {
  app.get('/signup', function(req, res) {
    res.render('signup.ejs');

  });


  app.post('/signup', urlencodedParser, function(req, res) {
      var post = req.body;
      var name = post.user_name;
      var pass = post.password;
      var fname = post.first_name;
      var lname = post.last_name;
      var mob = post.mob_no;

      if (req.body.firstname != "" && req.body.lastname != "" && req.body.nickname != "" && req.body.password != "" && req.body.birthdate != "") {
        console.log('hello' + req.body.birthdate)
        con.query("SELECT user_id FROM MyUser WHERE (MyUser.email =?) ", [req.body.Email],
          function(err, rows, fields) {
            if (rows == undefined || rows != "") {

              res.send(500, 'showAlert');
              console.log(rows);

            } else {

              if (!req.files)
                return res.status(400).send('No files were uploaded.');

              var file = req.files.uploaded_image;
              var img_name = file.name;

              if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

                file.mv('public/images/upload_images/' + file.name, function(err) {

                  if (err)

                    return res.status(500).send(err);
                  var encrypt_pass = md5(req.body.password);
                  var sql = "INSERT INTO `MyUser`(`firstname`,`lastname`,`phone_number1`,`nickname`, `password` ,`profile_picture`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "')";

                  var query = db.query(sql, function(err, result) {
                    console.log('am here! and near');
                    res.send(result[i]);

                  });
                });


              } else {
                //  message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
                console.log('this format isnt allowed');
                //res.render('index.ejs',{message: message});
              }
            }

          //res.redirect('profile/'+result.insertId);
        });
    }
  });


}
