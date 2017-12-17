//This is the server.

//require all dependencies.
var express = require ('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//adjust views and ejs
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//handle static files
app.use('/assets', express.static(__dirname + '/assets'));

var port = 4000;
//listen to the specified port
app.listen(port, function(){
  console.log('Server started on port '+port);
});
