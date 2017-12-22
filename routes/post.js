var Posts = require('../models/post');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app) {


  //Add a new post to the post Table
  app.post('/post', urlencodedParser, function(req, res) {
    console.log("Posting");
    var post=req.body;
    var pcaption=post.caption;
    var id= post.id_label;
    var pstatus=post.privacy;
    console.log(post);
    if(req.files.postpic)
    {
      var file = req.files.postpic;
      var img_name = file.name;

      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/post_images/' + file.name, function(err) {

            if (err)
            return res.status(500).send(err);
            mypost=new Posts({
              caption:pcaption,
              poster_id: id,
              ispublic: pstatus,
              image:img_name,
            });
            mypost.save();
          });
        }
        else {
          message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";

          res.render('temp.ejs', {
            message: message
          });
        }
    }
    else {
    mypost=new Posts({
      caption:pcaption,
      poster_id: id,
      ispublic: pstatus,
    });
    mypost.save();
  }
    res.redirect("/user/home/"+id);
  });


}
