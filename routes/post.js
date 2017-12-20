var Posts = require('../models/post');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {
  //get all public posts in the posts table
  app.get('/post', function(req, res) {
  mypost=new Posts();
  res.render('home.ejs');
mypost.query("SELECT caption,ispublic, firstname FROM Post JOIN MyUser ON Post.poster_id =MyUser.user_id", function(err, rows, fields) {
  for(var i=0; i<rows.length; i++) {
      console.log(rows[i]);
  }
});

  });


  //Add a new post to the post Table
  app.post('/post', urlencodedParser, function(req, res) {

    mypost=new Posts({
      caption:req.body.caption,
      poster_id: req.body.poster_id,
      ispublic: req.body.ispublic,
    });
    mypost.save();
    res.json(mypost);

  });


}
