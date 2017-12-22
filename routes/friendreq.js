//require the user model for using it.
const Friendship = require('../models/friendship');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {

  app.post('/request/accept', urlencodedParser, function(req, res) {
        //TO DO
        console.log("accepting request");
        console.log(req.body.uid);
        console.log(req.body.rid);
        con.query("UPDATE Friendship SET status='1' WHERE user_id1=? AND user_id2=?", [req.body.uid, req.body.rid],
            function(err, rows, fields) {
              console.log("Accepted");
            });
      });
      app.post('/request/ignore', urlencodedParser, function(req, res) {
        //TO DO
        console.log("deleting request");
        console.log(req.body.uid);
        console.log(req.body.rid);
        con.query("DELETE FROM Friendship  WHERE user_id1=? AND user_id2=? AND status='0'", [req.body.uid, req.body.rid],
            function(err, rows, fields) {
              console.log("Ignored");
            });
      });
      
  app.get('/friendreq', function(req, res) {

    //TO DO
  });
  app.post('/friendreq', urlencodedParser, function(req, res) {
    //TO DO
    console.log('Sending friend request');
    friendship = new Friendship({
      user_id1: req.body.user_id,
      user_id2: req.body.reqid,
      status :0
    });
    friendship.save();
  });


}
