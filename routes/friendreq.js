//require the user model for using it.
const Friendship = require('../models/friendship');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {

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
