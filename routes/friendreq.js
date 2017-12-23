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

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SocialNetwork"
});


module.exports = function(app) {




    app.post('/request/accept', urlencodedParser, function(req, res) {



      con.query("UPDATE Friendship SET status='1' WHERE user_id1=? AND user_id2=?", [req.body.uid, req.body.rid],
          function(err, rows, fields) {
            res.send(rows);
          });
    });
    app.post('/request/ignore', urlencodedParser, function(req, res) {
      //TO DO

      con.query("DELETE FROM Friendship  WHERE user_id1=? AND user_id2=? AND status='0'", [req.body.uid, req.body.rid],
          function(err, rows, fields) {
            res.send(rows);
          });
    });

  app.post('/sendfriendreq', urlencodedParser, function(req, res) {

console.log("i am here my id : "+req.body.id +" frieanID: "+req.body.idf);

    friendship = new Friendship({
      user_id1: req.body.id,
      user_id2: req.body.idf,
      status :0
    });
    friendship.save();
    res.json(friendship);
  });


}
