var user = require('../models/mysql-connection.js');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var checkNullString = require('check-null-string');
var json = require('json');

module.exports = function(app){
app.get('/search',function(req,res)
{
res.render('search.html');

var firstname = req.get('firstname');
var lastname = req.get('lastname');
var email = req.get('email');
var hometown = req.body.hometown;
var caption = req.get('caption');



console.log(hometown);

//if(checkNullString(firstname) && checkNullString(lastname) && checkNullString(email) && checkNullString(hometown ) && checkNullString(caption) )
//{

//}

/*    var myQuery = "select * from MyUser where "
    if(!checkNullString(firstname))
    myQuery += " firstname = " + mysql.escape(firstname);
    if(!checkNullString(lastname))
    myQuery += " AND lastname = " + mysql.escape(lastname);
    if(!checkNullString(email))
    myQuery += " AND email = " + mysql.escape(email);
    if(!checkNullString(hometown))
    myQuery += " AND hometown = " + mysql.escape(hometown);
    if(!checkNullString(caption))
    myQuery += " AND email like '%" + mysql.escape(caption)+"%'";

    user.query(myQuery,function(err,result)
  {
     if (err){ throw err;
       console.log("HIIIIIIIIIII    ");
console.log(err);

     }

  }
);*/


}
);


}
