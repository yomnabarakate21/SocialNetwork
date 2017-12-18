
var MyAppModel=require('../models/mysql.js');

var Posts = MyAppModel.extend({
    tableName: "Post",
});
module.exports=Posts;
