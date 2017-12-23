var mysql = require('mysql');
var md5 = require('md5');
var checkNullString = require('check-null-string');

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
    }); //end of get function

    app.post('/editprofile/:id', function(req, res, next) {
         var id = req.params.id;
          var post = req.body;
          var name = post.euser_name;
          var pass = post.epassword;
          var fname = post.efirst_name;
          var lname = post.elast_name;
          var mob = post.emob_no;
          var hometown = post.ehome_town;
          var status = post.emarital_status;
          var bdate = post.ebdate;
          var aboutme=post.aboutme;
          if (req.files.euploaded_image) {
            var file = req.files.euploaded_image;
            var img_name = file.name;

            if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

              file.mv('public/images/upload_images/' + file.name, function(err) {

                  if (err)
                  return res.status(500).send(err);

                  var query = con.query("UPDATE MyUser SET  MyUser.profile_picture=? WHERE MyUser.user_id=?", [img_name, req.params.id], function(err, result) {
                    if (err)
                    throw err;

                  });
                });

              }
              else {
                message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";

                res.render('temp.ejs', {
                  message: message
                });
              }

            }

            if (!checkNullString(req.body.elast_name)) {

              con.query("UPDATE MyUser SET lastname=? WHERE MyUser.user_id=?", [req.body.elast_name, id]);

              sleep(1000);
            }


            if (!checkNullString(req.body.efirst_name)) {

              con.query("UPDATE MyUser SET firstname=? WHERE MyUser.user_id=?", [req.body.efirst_name, id],function(err, result) {

              });
              sleep(1000);
            }
            if (req.body.ebdate) {

              con.query("UPDATE MyUser SET birthdate=? WHERE MyUser.user_id=?", [req.body.ebdate, id],function(err, result) {

              });
              sleep(1000);
            }
            if (!checkNullString(req.body.aboutme)) {

              con.query("UPDATE MyUser SET about_me=? WHERE MyUser.user_id=?", [req.body.aboutme, id]);

              sleep(1000);
            }

            if (!checkNullString(mob)) {

              con.query("UPDATE MyUser SET phone_number1=? WHERE MyUser.user_id=?", [req.body.emob_no, id]);
              sleep(1000);
            }

            if (!checkNullString(req.body.ehome_town)) {

              con.query("UPDATE MyUser SET hometown=? WHERE MyUser.user_id=?", [req.body.ehome_town, id]);

              sleep(1000);
            }

            if (!checkNullString(req.body.epassword_1) && !checkNullString(req.body.epassword)) {
              var pass = md5(req.body.epassword_1);

              if (pass == x) {


                con.query("UPDATE MyUser SET password=? WHERE MyUser.user_id=?", [pass, id]);
              } else {
                   console.log('Passwords')

              }
              sleep(1000);
            }

          //res.render('edituser.ejs',{data:id});
          res.redirect('/editprofile/'+id);

          });
        }
