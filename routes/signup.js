
var mysql = require('mysql');
var md5 = require('md5');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SocialNetwork"
});
var sleep = require('thread-sleep');
var User = require('../models/user');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

module.exports = function(app){
  app.get('/signup', function(req, res){
//user=new User();
    res.render('signup.ejs');

  });


  app.post('/signup', urlencodedParser, function(req, res) {
console.log('adding a user '+req.body.Email);
if(req.body.firstname!=""&&req.body.lastname!=""&&req.body.nickname!=""&&req.body.password!=""&&req.body.birthdate!=""){
console.log('hello'+req.body.birthdate)
con.query("SELECT user_id FROM MyUser WHERE (MyUser.email =?) ", [req.body.Email],
  function(err, rows, fields) {
if (rows==undefined||rows!="")
    {
      console.log('fashlaaa');
      res.send(500,'showAlert');
    console.log(rows);

    }
    else
    {
var encrypt_pass=md5(req.body.password);
console.log( 'was '+req.body.password +'is '+ encrypt_pass);
  user= new User ({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
  nickname:req.body.nickname,
  password:encrypt_pass,
  phone_number1:req.body.phone_number1,
  email:req.body.Email,
  gender:req.body.gender,
  birthdate:req.body.birthdate,
  hometown:req.body.hometown,
  marital_status:req.body.marital_status,
  about_me:req.body.about_me,
});


   user.save();
        console.log(' user added '+req.body.firstname);

   con.query("SELECT COUNT(user_id) as t FROM MyUser",function(err, rows, fields) {
  //   console.log('helllo');
if(rows.length>0){
 var s=rows[0].t+1;
 console.log('pp: '+s);
 console.log(rows);
       res.send({id:s});
     }
   });
}
});
}
else {
    res.send(500,'showAlert1');
}
});
}
