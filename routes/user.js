<<<<<<< HEAD
var mysql = require('../models/mysql-connection.js');
var User = require('../models/user.js');
=======
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
>>>>>>> ef9db6b60b2f8e06ea8e92ab0bcf9b52d7472fb6
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
<<<<<<< HEAD
var checkNullString = require('check-null-string');
var json = require('json');
var user = new User();
module.exports = function(app){
app.post('/search', urlencodedParser,function(req,res)
{


var firstname = req.body.firstname;
var lastname = req.body.lastname;
var email = req.body.email;
var hometown = req.body.hometown;
var caption = req.body.caption;
console.log(email);


=======
var data=[];
module.exports = function(app) {
    app.get('/user/home/:id', function(req, res, next) {

        con.query(" SELECT user_id,firstname,lastname FROM MyUser JOIN (SELECT * FROM Friendship WHERE ((Friendship.user_id1 =? OR Friendship.user_id2 =? )AND Friendship.status='0'))as t1  ON ((MyUser.user_id= t1.user_id1 OR MyUser.user_id= t1.user_id2) AND MyUser.user_id<>?) ", [req.params.id, req.params.id, req.params.id],
          function(err, rows, fields) {

            for (var i = 0; i < rows.length; i++) {
              console.log(rows[i]);
              /*data.push({
                fname: rows[i].firstname,
                lname: rows[i].lastname,
                id: rows[i].user_id,
              });
              */

            }
            res.render('home.ejs',{homedata:rows});

          });


        });





      app.get('/user/getprofile/:id', function(req, res, next) {
        res.send("You are in the profile of the user of id" + req.params.id);
        next();
      });


      app.post('/user', urlencodedParser, function(req, res) {



      });
>>>>>>> ef9db6b60b2f8e06ea8e92ab0bcf9b52d7472fb6

if(checkNullString(firstname) && checkNullString(lastname) && checkNullString(email) && checkNullString(hometown ) && checkNullString(caption) )
{

<<<<<<< HEAD
}

else {
    var myQuery = "select * from MyUser where "
    if(checkNullString(firstname)===false)
    myQuery += " firstname = " + mysql.escape(firstname);
    if(checkNullString(lastname)===false)
    myQuery += " AND lastname = " + mysql.escape(lastname);
    if(checkNullString(email)===false)
    myQuery += " AND email = " + mysql.escape(email);
    if(checkNullString(hometown)===false)
    myQuery += " AND hometown = " + mysql.escape(hometown);
    if(checkNullString(caption)===false)
    myQuery += " AND email like " + mysql.escape('%'+caption+'%');

    console.log(myQuery);

    user.query(myQuery,function(err,result)
  {
     if (err){ throw err;
            console.log(err);

     }

     else { //results
console.log(result);

     }

  }
);
}
});
app.get('/search', urlencodedParser, function(req,res){
  res.render('search');
});
}
=======
    }
>>>>>>> ef9db6b60b2f8e06ea8e92ab0bcf9b52d7472fb6
