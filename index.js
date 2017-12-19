//This is the server.

//require all dependencies.
var express = require ('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express(),
http = require('http'),
busboy = require("then-busboy"),
fileUpload = require('express-fileupload');

var index = require ('./routes/index');
var post= require('./routes/post');
var user= require('./routes/user');
var search = require('./routes/search');
var friendreq= require('./routes/friendreq');
var friend= require('./routes/friend');

//body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(fileUpload());

//adjust views and ejs
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);



//handle static files
app.use('/public', express.static(__dirname + '/public'));

//fire controllers


index(app);
user(app);
post(app);
friendreq(app);
search(app);
friend(app);

//


var port = 4001;
//listen to the specified port
app.listen(port, function(){
  console.log('Server started on port '+port);
});
