var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SocialNetwork"
});
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false });

var message='';
var message1='';
var info;
var posts_info;
function setValue(value) {
  info = value;
}

function setPost(post) {

  posts_info = post;
}

module.exports = function(app) {
app.get('/friend/profile/:id/:idf', function(req, res, next) {
  var id=req.params.id;
  var data=[{user_id:id}];
  var idf=req.params.idf;
  var no_of_req;
  con.query("SELECT COUNT (*) AS fcount FROM MyUser JOIN Friendship ON user_id=user_id1 where user_id2=? AND status='0'",[req.params.id],
    function(err, crows, fields) {
      no_of_req=crows[0].fcount;
    });

    con.query("SELECT * FROM MyUser WHERE MyUser.user_id=?",req.params.idf,function(err, result, fields) {
      if (result.length <= 0)
        message1 = "Profile not found!";
        console.log(result[0].user_id);
con.query("SELECT * FROM Friendship AS f WHERE ((f.user_id1 =? AND f.user_id2=?) OR (f.user_id1 =? AND f.user_id2 =?))",[req.params.idf,req.params.id,req.params.id,req.params.idf]
  ,function(err, dataa, fields) {


if (dataa.length<1)
{
  if(req.params.idf==req.params.id)
  {
message ="me"
  //
  }
  else{
  message="send friend request";
}
}
else if(dataa[0].status==1)  {
  message="friends";
}

else if(dataa[0].status==0 && dataa[0].user_id1==req.params.id )
{

  message="you already send friend request"
}

else {
message="accept";
}

con.query(" SELECT * FROM MyUser JOIN (SELECT * FROM Friendship WHERE ((Friendship.user_id1 =? OR Friendship.user_id2 =? )AND Friendship.status='1'))as t1  ON ((MyUser.user_id= t1.user_id1 OR MyUser.user_id= t1.user_id2) AND MyUser.user_id<>?) ", [req.params.idf, req.params.idf, req.params.idf],
  function(err, friendData, fields) {

    setValue(friendData);

//get all user posts
con.query(" SELECT * FROM MyUser JOIN (SELECT * FROM Post WHERE Post.poster_id=? ) AS t1 ON MyUser.user_id = t1.poster_id ORDER BY t1.posted_time DESC", req.params.idf,function(err, rows2, fields) {
    setPost(rows2);

//get all public posts
con.query("SELECT * FROM MyUser JOIN (SELECT * FROM Post WHERE Post.poster_id= ? AND Post.ispublic='1' ) AS t1 ON MyUser.user_id = t1.poster_id ORDER BY t1.posted_time DESC",req.params.idf,
function(err, publicposts, fields){


//query to get the info of the userhimself

if (message=="me")
{

res.writeHead(301,{Location: '/user/homeProfile/'+req.params.id});
res.end();
}
else
    res.render('friend.ejs', {fdata:result ,no_of_req:no_of_req, status:message, data:data , idf:idf, message1: message1, friendsdata: info , postsdata: posts_info,publicposts:publicposts});


      });
      });
      });
    });



    });
});
}
