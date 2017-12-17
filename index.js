//This is the server.

//require all dependencies.
var express = require ('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var index = require ('./routes/index');

//body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//adjust views and ejs
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//connect to the database
//use the mlab cloud service instead of the local mongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://yomna:1234567890@ds033125.mlab.com:33125/mytasklist_yomna');
mongoose.Promise = global.Promise;

//handle static files
app.use('/assets', express.static(__dirname + '/assets'));

//fire controllers


index(app);


//


var port = 4000;
//listen to the specified port
app.listen(port, function(){
  console.log('Server started on port '+port);
});
