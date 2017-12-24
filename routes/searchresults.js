var http = require('http');
var mysql = require('../models/mysql-connection.js');
var User = require('../models/user.js');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var checkNullString = require('check-null-string');

var user = new User();



module.exports = function(app) {



  app.post('/searchresults', urlencodedParser, function(req, res) {

    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var hometown = req.body.hometown;
    var caption = req.body.caption;
    var data = [];



    if (checkNullString(firstname) && checkNullString(lastname) && checkNullString(email) && checkNullString(hometown) && checkNullString(caption))

    {

      data = [];
      res.send(data);
    } else {

      var counter = 0 ;
      var myQuery = "select * from MyUser where "
      if (checkNullString(firstname) === false){
        myQuery += " firstname = " + mysql.escape(firstname);
counter++;
      }
      if (checkNullString(lastname) === false){
        if (counter>0) myQuery+=" AND ";
        myQuery += " lastname = " + mysql.escape(lastname);
      counter++;
    }
      if (checkNullString(email) === false){
        if (counter>0) myQuery+=" AND ";
        myQuery += " email = " + mysql.escape(email);
        counter++;
      }
      if (checkNullString(hometown) === false){
        if (counter>0) myQuery+=" AND ";
        myQuery += "  hometown = " + mysql.escape(hometown);
        counter++;
      }
      if (checkNullString(caption) === false){
        if (counter>0) myQuery+=" AND ";
        myQuery += "  caption like " + mysql.escape('%' + caption + '%');
        counter++;
      }
      myQuery+=";"
      console.log(myQuery);

      user.query(myQuery, function(err, rows, fields) {
        if (err) {
          throw err;
        } else { //results

          for (var i = 0; i < rows.length; i++) {
            data.push(rows[i]);

          }

          res.send(data);

        }
      });
    }
  }); //end of app.post

  //get the search page on requesting it.
  app.get('/search/:id', function(req, res, next) {
    id = req.params.id;
    var no_of_req;
    //get all reqs
    mysql.query("SELECT COUNT (*) AS fcount FROM MyUser JOIN Friendship ON user_id=user_id1 where user_id2=? AND status='0'", [req.params.id],
      function(err, crows, fields) {
        no_of_req = crows[0].fcount;
      });
    mysql.query("SELECT * FROM MyUser WHERE MyUser.user_id=?", req.params.id, function(err, rows, fields) {
      if (err) throw err;
      res.render('search.ejs', {
        data: rows,
        no_of_req: no_of_req,
      });
      next();
    });

  }); //end of app.get
} //end of fn
