var Posts = require('../models/post');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {

  app.get('/post', function(req, res) {
  mypost=new Posts();
  res.render('home.ejs');
  mypost.find('all', {where: "ispublic = '1'"}, function(err, rows) {
      for(var i=0; i<rows.length; i++) {
          console.log(rows[i]);
      }
  });


  });



  app.post('/post', urlencodedParser, function(req, res) {

    mypost=new Posts({
      caption:req.body.caption,
      poster_id: req.body.poster_id,
      ispublic: req.body.ispublic,
    });
    mypost.save();

  });


}
