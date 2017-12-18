var MyAppModel = require('./mysql.js');
var User = MyAppModel.extend({
    tableName: "MyUser",
});
module.exports=User;
