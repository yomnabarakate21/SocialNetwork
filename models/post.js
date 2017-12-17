var MyAppModel = require('./mysql.js');
var Posts = MyAppModel.extend({
    tableName: "post",
});
module.exports=Posts;
