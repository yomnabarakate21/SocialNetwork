var http = require('http');
var mysql = require('../models/mysql-connection.js');
var User = require('../models/user.js');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var checkNullString = require('check-null-string');

var user = new User();



module.exports = function(app){
app.get('/search', urlencodedParser, function(req, res)
{


res.render('search.ejs',
{
  searchResults:""}
);
}
);

//console.log("hi");
app.post('/search', urlencodedParser, function(req, res){
var firstname = req.body.firstname;
var lastname = req.body.lastname;
var email = req.body.email;
var hometown = req.body.hometown;
var caption = req.body.caption;
console.log(firstname);



if(checkNullString(firstname) && checkNullString(lastname) && checkNullString(email) && checkNullString(hometown ) && checkNullString(caption) )

{
  console.log("hinulllll");
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

    user.query(myQuery,function(err,rows,fields)
{
     if (err){ throw err;
            console.log(err);

     }

     else { //results
       for (var i = 0; i < rows.length; i++) {
         console.log(rows[i]);


       }


       res.render('search.ejs', {
         searchResults : rows
       });


     }
   });


 }});



/*
app.get('/search', function(req, res, next) {
  res.send("You are in the profile of the user of id" + req.params.id);
  next();


});*/
/*app.post('/search', urlencodedParser, function(req, res) {



});*/


}
