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
var info;
var posts_info;
var ids = [];

function setids(friends_ids, callback) {
  ids=[];
  for (var i = 0; i < friends_ids.length; i++) {
    ids.push(friends_ids[i].user_id);
  }

  callback();

}

function setValue(value) {
  info = value;
  for (var i = 0; i < info.length; i++) {


  }
}

function setPost(post) {

  posts_info = post;
  console.log('new');
  for (var i = 0; i < posts_info.length; i++) {
    console.log(posts_info[i].firstname + posts_info[i].caption );

  }
}
module.exports = function(app) {
  app.get('/user/home/:id', function(req, res, next) {
    var id = req.params.id;
    //get all the friends
    con.query(" SELECT user_id FROM MyUser JOIN (SELECT * FROM Friendship WHERE ((Friendship.user_id1 =? OR Friendship.user_id2 =? )AND Friendship.status='0'))as t1  ON ((MyUser.user_id= t1.user_id1 OR MyUser.user_id= t1.user_id2) AND MyUser.user_id<>?) ", [req.params.id, req.params.id, req.params.id],
      function(err, rows, fields) {
        if (err) console.log('error');
        setids(rows, function() {
          if (ids.length > 0) {
            con.query("SELECT * FROM MyUser JOIN (SELECT * FROM Post WHERE Post.poster_id IN (" + ids.join() + ")) AS t1 ON MyUser.user_id= t1.poster_id ",
              function(err, rows2, fields) {
                if (err) console.log('eror');
                setPost(rows2);
                var message = '';
                con.query("SELECT * FROM MyUser WHERE MyUser.user_id=?", id, function(err, result) {
                  if (result.length <= 0)
                    message = "Profile not found!";
                  res.render('home.ejs', {
                    data: result,
                    message: message,
                    postsdata: posts_info,
                  });
                });
              });
          } else {
            console.log('m3ndeeesh so7ab');
            posts_info=[];
            con.query("SELECT * FROM MyUser WHERE MyUser.user_id=?", id, function(err, result) {
              if (result.length <= 0)
                message = "Profile not found!";
              res.render('home.ejs', {
                data: result,
                message: message,
                postsdata: posts_info,
              });
            });

          }

        });
      
      });


  });






  app.get('/user/homeProfile/:id', function(req, res, next) {
    var id = req.params.id;
    //get all the friends
    con.query(" SELECT * FROM MyUser JOIN (SELECT * FROM Friendship WHERE ((Friendship.user_id1 =? OR Friendship.user_id2 =? )AND Friendship.status='0'))as t1  ON ((MyUser.user_id= t1.user_id1 OR MyUser.user_id= t1.user_id2) AND MyUser.user_id<>?) ", [req.params.id, req.params.id, req.params.id],
      function(err, rows, fields) {
        setValue(rows);

      });
    //get all user posts
    con.query("SELECT * FROM MyUser JOIN (SELECT * FROM Post WHERE Post.poster_id=? ) AS t1 ON MyUser.user_id = t1.poster_id ", id,
      function(err, rows2, fields) {
        setPost(rows2);
      });

    // query to get the info of the userhimself
    var message = '';
    con.query("SELECT * FROM MyUser WHERE MyUser.user_id=?", id, function(err, result) {
      if (result.length <= 0)
        message = "Profile not found!";
      res.render('homeProfile.ejs', {
        data: result,
        message: message,
        friendsdata: info,
        postsdata: posts_info,
      });
    });

  });



  app.get('/user/getprofile/:id', function(req, res, next) {
    var message = '';
    var id = req.params.id;
    con.query("SELECT * FROM MyUser WHERE MyUser.user_id=?", id, function(err, result) {
      if (result.length <= 0)
        message = "Profile not found!";
      console.log(result[0].profile_picture);
      res.render('home2.ejs', {
        data: result,
        message: message
      });
    });

  });


  app.post('/user', urlencodedParser, function(req, res) {



  });


}
