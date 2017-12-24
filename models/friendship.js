
const MyAppModel = require('../models/mysql');


var Friendship = MyAppModel.extend({
  tableName: "Friendship",
});
module.exports = Friendship;
