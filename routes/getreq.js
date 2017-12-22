
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SocialNetwork"
});



//require the user model for using it.
const User = require('../models/user');
const Friendship = require('../models/friendship');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var info;
function setValue(value) {
  info = value;
  for (var i = 0; i < info.length; i++) {
    console.log(info[i].firstname);

  }
}
module.exports = function(app) {

  app.post('/getreq/:id', function(req, res) {
    console.log("In post");
    console.log(req.params.id);
    con.query("SELECT * FROM MyUser JOIN Friendship ON user_id=user_id1 where user_id2=? AND status='0'",[req.params.id],
      function(err, rows, fields) {
       setValue(rows);
      });
      console.log("In get 2");
       res.render('requests.ejs', {
        friendsdata: info,
      });


  });

  app.get('/getreq/:id', function(req, res) {
    //var info;
    console.log("In get");
    console.log(req.params.id);
    con.query("SELECT * FROM MyUser JOIN Friendship ON user_id=user_id1 where user_id2=? AND status='0'",[req.params.id],
      function(err, rows, fields) {
       setValue(rows);
       res.render('requests.ejs', {
        friendsdata: info,
      });
      });
      console.log("In get 2");


  });



}
