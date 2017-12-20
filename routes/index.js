

/*module.exports = function(app){
  app.get('/',function(req,res,next){
    res.render('index.html');
  });
}
*/
var db = require('../models/mysql-connection.js');
module.exports = function(app){
    message = '';
   app.post('/',function(req,res,next){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      var fname= post.first_name;
      var lname= post.last_name;
      var mob= post.mob_no;

	  if (!req.files)
				return res.status(400).send('No files were uploaded.');

		var file = req.files.uploaded_image;
		var img_name=file.name;

	  	 if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){

              file.mv('public/images/upload_images/'+file.name, function(err) {

	              if (err)

	                return res.status(500).send(err);
      					var sql = "INSERT INTO `MyUser`(`firstname`,`lastname`,`phone_number1`,`nickname`, `password` ,`profile_picture`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "','" + img_name + "')";

    						var query = db.query(sql, function(err, result) {
                  console.log('am here! and near');
    							 //res.redirect('profile/'+result.insertId);
    						});
					   });
          } else {
          //  message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
           console.log('this format isnt allowed');
            //res.render('index.ejs',{message: message});
          }
   });

   app.get('/',function(req,res,next){
     res.render('index.html');
   });

/*exports.profile = function(req, res){
	var message = '';
	var id = req.params.id;
    var sql="SELECT * FROM `users_image` WHERE `id`='"+id+"'";
    db.query(sql, function(err, result){
	  if(result.length <= 0)
	  message = "Profile not found!";

      res.render('profile.ejs',{data:result, message: message});
   });
};
*/
}
