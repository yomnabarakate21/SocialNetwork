var mysql = require('mysql');
var md5=require('md5');
//var io =require("socket.io")(http);
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "SocialNetwork"
});


var x;
var id;
var sleep = require('thread-sleep');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){
  app.get('/editprofile/:id', function(req, res,next){
  id=req.params.id;
    con.query("SELECT * FROM MyUser WHERE MyUser.user_id=?",req.params.id,function(err,rows, fields) {
          console.log('hi');
          //console.log(rows);
           x=rows[0].password;
              // console.log('password pp   '+x);

            //console.log('lpplpp'+rows);
if (rows!=""){

                   //console.log('pass    '+x);
            res.render('edituser.ejs', {data:rows});
          }


  });
});

// io.on('connection',function(socket){
// console.log("user Connected");
// socket.on('modifications added',function(modifications){
//
//   add_modification(modifications,function(res){
//     if(res){
//       io.emit('refresh feed',modifications);
//     }
//     else {
//       io.emit('error');
//     }
//   });
// });
// });



app.post('/user/editprofile/:id', function(req, res,next){
  if(req.files.image)
  {
    console.log('yarab');
  }
  if(req.body.lastname!="")
  {
  console.log('uadating lastname: '+req.body.lastname);
    con.query("UPDATE MyUser SET lastname=? WHERE MyUser.user_id=?",[req.body.lastname,id]);

sleep(1000);
  }

//console.log('Updating a user'+ req.body.firstname);
if(req.body.firstname!="")
{
  con.query("UPDATE MyUser SET firstname=? WHERE MyUser.user_id=?",[req.body.firstname,id]);
sleep(1000);
}

if(req.body.phone_number1!="")
{
console.log('uadating: '+req.body.lastname);
  con.query("UPDATE MyUser SET phone_number1=? WHERE MyUser.user_id=?",[req.body.lastname,id]);

sleep(1000);
}

if(req.body.hometown!="")
{
console.log('uadating: '+req.body.hometown);
  con.query("UPDATE MyUser SET hometown=? WHERE MyUser.user_id=?",[req.body.hometown,id]);

sleep(1000);
}

if(req.body.password_1!=""&&req.body.password!="")
{
  var pass=md5(req.body.password_1);
  console.log('old pass: '+x);
  console.log('newpass'+pass);
  if(pass==x){
console.log('uadating password: '+req.body.password_1);

  con.query("UPDATE MyUser SET password=? WHERE MyUser.user_id=?",[pass,id]);
}

else {
  res.status(500).send('showAlert');
  console.log('password 8alaat');
}
sleep(1000);
}



// con.query("SELECT firstname,lastname FROM MyUser WHERE MyUser.user_id=?",req.params.id,function(err,rows, fields) {
//       console.log('hi');
// console.log('id: '+req.params.id);
//         //console.log('lpplpp'+rows);
// if (rows!=""){
// console.log(rows);
//         res.render('edituser.ejs', {data:id});
//     }


});

};
