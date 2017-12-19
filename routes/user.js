var mysql = require('../models/mysql-connection.js');
var User = require('../models/user.js');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
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



if(checkNullString(firstname) && checkNullString(lastname) && checkNullString(email) && checkNullString(hometown ) && checkNullString(caption) )
{

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
