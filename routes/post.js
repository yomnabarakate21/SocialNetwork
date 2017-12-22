var Posts = require('../models/post');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {
  

  //Add a new post to the post Table
  app.post('/post', urlencodedParser, function(req, res) {

    mypost=new Posts({
      caption:req.body.caption,
      poster_id: req.body.poster_id,
      ispublic: req.body.ispublic,
    });
    mypost.save();
    res.send(mypost);

  });


}
