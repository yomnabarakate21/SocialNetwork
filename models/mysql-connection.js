var mysqlModel = require('mysql');
var MyAppModel = mysqlModel.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'SocialNetwork',
});
module.exports = MyAppModel;
