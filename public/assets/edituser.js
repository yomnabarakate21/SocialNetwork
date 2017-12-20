$(function(){
  $("#submit_btn").click(function(){

    var fname=$("#firstname");
    var lname=$("#lastname");
    var nickname=$("#nickname");
    var phone_number1=$("#phone_number1");
    //var about_me=$("#about_me");
    var hometown=$("#hometown");
    var Email = $("#Email");
    var password=$("#password");
    var password_1=$("#password_1");


    var user={
      firstname:fname.val(),
      lastname:lname.val(),
      nickname:nickname.val(),
      phone_number1:phone_number1.val(),
      hometown:hometown.val(),
      Emai:Email.val(),
      password_1:password_1.val(),
      password:password.val()

    };
    console.log('I was pressed');

    $.ajax ({
      type: 'POST',
      url: '/user/editprofile/:id',
      data:user,
      success: function(data){
        alert('updated');
       //location.reload();
    },
    error: function(error){
      if(error.responseText=='showAlert')
      alert("please enter valid password");
    }

    });
  });
});
