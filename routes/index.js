var db = require('../models/mysql-connection.js');
var md5 = require('md5');
var checkNullString = require('check-null-string');
module.exports = function(app) {
  message = '';
  app.post('/', function(req, res, next) {
    var post = req.body;
    var name = post.user_name;
    var non_pass = post.password;
    var fname = post.first_name;
    var lname = post.last_name;
    var mob = post.mob_no;
    var gender = post.gender;
    var hometown = post.home_town;
    var email = post.email;
    var status = post.marital_status;
    var bdate=post.bdate;
    if(checkNullString(name))
    {
      name =fname+" "+lname;
    }
    var pass=md5(non_pass);
    var q = "SELECT * FROM MyUser WHERE email = ?";
    var query = db.query(q, email, function(err, result) {
      if (result.length > 0) {
        res.render('index.ejs',{taken:'THIS EMAIL IS ALREADY TAKEN!'});
      }
  else{
    if (!req.files.uploaded_image) {

      if (gender == "male")
        var sql = "INSERT INTO `MyUser`(`firstname`,`lastname`,`phone_number1`,`nickname`, `password` ,`profile_picture`,`gender`,`email`,`hometown`,`marital_status`,`birthdate`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','m_default.jpg','" + gender + "','" + email + "','" + hometown + "','" + status + "','" + bdate + "')";
      else
        var sql = "INSERT INTO `MyUser`(`firstname`,`lastname`,`phone_number1`,`nickname`, `password` ,`profile_picture`,`gender`,`email`,`hometown`,`marital_status`,`birthdate`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','f_default.jpg','" + gender + "','" + email + "','" + hometown + "','" + status + "','" + bdate + "')";

      var query = db.query(sql, function(err, result) {
        res.redirect('/user/home/' + result.insertId);
      });

    } else {
      var file = req.files.uploaded_image;
      var img_name = file.name;

      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_images/' + file.name, function(err) {

          if (err)

            return res.status(500).send(err);
          var sql = "INSERT INTO `MyUser`(`firstname`,`lastname`,`phone_number1`,`nickname`, `password` ,`profile_picture`,`gender`,`email`,`hometown`,`marital_status`,`birthdate`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "','" + gender + "','" + email + "','" + hometown + "','" + status + "','" + bdate + "')";

          var query = db.query(sql, function(err, result) {

            res.redirect('/user/home/' + result.insertId);

          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        console.log('this format isnt allowed');
        res.render('index.ejs', {
          message: message
        });
      }
    }
  }
});
});


  app.get('/', function(req, res, next) {
    res.render('index.ejs',{taken:''});
  });


}
