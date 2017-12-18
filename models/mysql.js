var mysqlModel = require('mysql-model');
var mysql = require('mysql');
var MyAppModel = mysqlModel.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'SocialNetwork'
});

module.exports= MyAppModel;
