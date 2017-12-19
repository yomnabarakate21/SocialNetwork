//use normal connection here
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SocialNetwork"
});



//require the user model for using it.
const User = require('../models/user');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var data = [];
module.exports = function(app) {
  app.get('/user/home/:id', function(req, res, next) {
    con.query(" SELECT user_id,firstname,lastname FROM MyUser JOIN (SELECT * FROM Friendship WHERE ((Friendship.user_id1 =? OR Friendship.user_id2 =? )AND Friendship.status='0'))as t1  ON ((MyUser.user_id= t1.user_id1 OR MyUser.user_id= t1.user_id2) AND MyUser.user_id<>?) ", [req.params.id, req.params.id, req.params.id],
      function(err, rows, fields) {

        for (var i = 0; i < rows.length; i++) {
          console.log(rows[i]);


        }
        res.render('home.ejs', {
          homedata: rows
        });

      });


  });





  app.get('/user/getprofile/:id', function(req, res, next) {
    res.send("You are in the profile of the user of id" + req.params.id);
    next();
  });


  app.post('/user', urlencodedParser, function(req, res) {



  });


}
