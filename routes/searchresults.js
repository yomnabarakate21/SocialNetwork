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



app.post('/searchresults', urlencodedParser, function(req, res){
var firstname = req.body.firstname;
var lastname = req.body.lastname;
var email = req.body.email;
var hometown = req.body.hometown;
var caption = req.body.caption;
var data=[];



if(checkNullString(firstname) && checkNullString(lastname) && checkNullString(email) && checkNullString(hometown ) && checkNullString(caption) )

{
  console.log("hi  nulllll");
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

       console.log('PLEASE SUCCEED :( ');
       for(var i=0; i<rows.length; i++) {
         data.push(rows[i]);

       }
        res.json(data);


     }
   });


 }
});//end of app.post




app.get('/search/:id', function(req, res, next) {
  id=req.params.id;
    mysql.query("SELECT * FROM MyUser WHERE MyUser.user_id=?",req.params.id,function(err,rows, fields) {
        if (err) throw err;
        res.render('search.ejs',{data:rows});
        next();
        });

});
}//end of fn
