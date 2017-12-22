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

module.exports = function(app) {
app.get('/friend/profile/:id', function(req, res, next) {
    con.query("SELECT firstname,lastname FROM MyUser WHERE MyUser.user_id=?",req.params.id,function(err, rows, fields) {
      console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
      for (var i = 0; i < rows.length; i++) {
        console.log(rows[i]);
      }
        res.render('friend.ejs', {
          data:rows
        });

      });
    });






}
