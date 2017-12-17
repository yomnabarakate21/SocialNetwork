var MyAppModel = require('./mysql.js');
var Friendship = MyAppModel.extend({
  tableName: "Friendship",
});
module.exports = Friendship;
