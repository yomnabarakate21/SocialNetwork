$(function(){
  $("#submit").click(function(event ){
    event.preventDefault();
var name =$("#name");
var password =$("#password");
var user={
  name:name.val(),
  password:password.val()
};
console.log('I was pressed');

  $.ajax ({
    type: 'POST',
    url: '/login',
    data:user,
    success: function(data){
    window.location.href = "/user/home/"+data.id;
  },
  error: function(error){
    if(error.responseText=='showAlert')
    alert('Name and pass dont match');
  }
  });
});
});
