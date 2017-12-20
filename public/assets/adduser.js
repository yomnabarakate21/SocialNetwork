

$(function(event){
  event.preventDefault();
  $("#submit_btn").click(function(){

    var fname=$("#Firstname");
    var lname=$("#LastName");
    var NickName=$("#NickName");
    var number=$("#number");
    var BirthDate=$("#BirthDate");
    var gender =$("#gender");
    var Status=$("#Status");
    var about_me=$("#about_me");
    var Hometown=$("#Hometown");
    var Email=$("#Email");
    var Password=$("#password");
alert('poiuy'+Email.val());
    var user={
          firstname:fname.val(),
          lastname:lname.val(),
    nickname:NickName.val(),
    password:Password.val(),
    phone_number1:number.val(),
    Email:Email.val(),
    gender:gender.val(),
    birthdate:BirthDate.val(),
    hometown:Hometown.val(),
    marital_status:Status.val(),
    about_me:about_me.val()
};
console.log('I was pressed');

$.ajax ({
  type: 'POST',
  url: '/signup',
  data:user,
  success: function(data){
    alert(data.id);
  console.log('hello');
},
error: function(error){
  if(error.responseText=='showAlert')
  alert("this Email Already exist");

}
});

});

});

// function checkEmail() {
//
//     var email =$("#Email");;
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//
//     if (!filter.test(email.value)) {
//     alert('Please provide a valid email address');
//     email.focus;
//     return false;
//  }
// }
//
// function validate() {
//   $("#email_status").html("");
//   var email = $("#name").val();
//   if (validateEmail(email)) {
//     $("#email_status").html(email + " is valid :)");
//     $("#email_status").css("color", "green");
//   } else {
//     $("#email_status").html(email + " is not valid :(");
//     $("#email_status").css("color", "red");
//   }
//   return false;
// }

$(function(){
    $("#sign_in_btn").click(function(){
    //  alert('poij;');
  //res.render('login.ejs');
  window.location.href = "http://localhost:4001/login";

});
});
