
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
}
module.exports = function(app) {

  app.post('/getreq/:id', function(req, res) {
    var todo={uid:user_id, rid:id};

    con.query(" SELECT * FROM MyUser JOIN (SELECT * FROM Friendship WHERE ((Friendship.user_id1 =? OR Friendship.user_id2 =? )AND Friendship.status='0'))as t1  ON ((MyUser.user_id= t1.user_id1 OR MyUser.user_id= t1.user_id2) AND MyUser.user_id=?) ", [req.params.id, req.params.id, req.params.id],
      function(err, rows, fields) {

      info = rows;
      });


      res.redirect('/getreq/'+req.params.id);

  });

  app.get('/getreq/:id', function(req, res) {
    //var info;
    var id=req.params.id;
  var data=[{user_id:id}];
    con.query("SELECT * FROM MyUser JOIN Friendship ON user_id=user_id1 where user_id2=? AND status='0'",[req.params.id],
      function(err, rows, fields) {
       setValue(rows);
          res.render('requests.ejs', {  friendsdata: info ,data:data });
      });




  });



}
