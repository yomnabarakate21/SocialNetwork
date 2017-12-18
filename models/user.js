
const MyAppModel = require('../models/mysql');
var User = MyAppModel.extend({
    tableName: "MyUser",
});
module.exports=User;
