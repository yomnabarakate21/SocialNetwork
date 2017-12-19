//This is the server.

//require all dependencies.
var express = require ('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var index = require ('./routes/index');

var post= require('./routes/post');
var user= require('./routes/user');
<<<<<<< HEAD
=======
var friendreq= require('./routes/friendreq');

>>>>>>> ef9db6b60b2f8e06ea8e92ab0bcf9b52d7472fb6
//body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//adjust views and ejs
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);



//handle static files
app.use('/public/assets', express.static(__dirname + '/public/assets'));

//fire controllers


index(app);
user(app);
post(app);
friendreq(app);
user(app);

//


<<<<<<< HEAD
var port = 4001;
=======
var port = 5000;
>>>>>>> ef9db6b60b2f8e06ea8e92ab0bcf9b52d7472fb6
//listen to the specified port
app.listen(port, function(){
  console.log('Server started on port '+port);
});
