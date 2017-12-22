var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SocialNetwork"
});
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var message='';

module.exports = function(app) {
app.get('/friend/profile/:id/:idf', function(req, res, next) {
  var id=req.params.id;
  var data=[{user_id:id}];

  var idf=req.params.idf;
    con.query("SELECT * FROM MyUser WHERE MyUser.user_id=?",req.params.idf,function(err, result, fields) {

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
// if(message=="me")
// {
//   res.render('home.ejs',{data:result});
// }
//else
    res.render('friend.ejs', {fdata:result ,status:message, data:data , idf:idf});

      });



      });
    });






}
