$(document).ready(function(){
  if(document.getElementById("status").value!="friends")
{
$("#thefriend").hide();
}
else
{
  $("#Nofriend").show();
}


if(document.getElementById("status").value!="accept")
{
document.getElementById("ignore").style.visibility="hidden";
}

  if (document.getElementById("status").value!="send friend request"&&document.getElementById("status").value!="accept")
  {
      document.getElementById("status").disabled=true;
  }

  //not friend
 if (document.getElementById("status").value=="send friend request"){

  $("#status").click(function() {
    var id =  document.getElementById("id").value;
    var idf =  document.getElementById("idf").value;

    var todo={id:id , idf:idf};

    $.ajax({
      type: 'POST',
      url: '/sendfriendreq',
      data:todo,
      success:function(){

        document.getElementById("status").value="Friend request sent";
          document.getElementById("status").disabled=true;
          location.reload();
      }
    });
  });

}
else {
  $("#ignore").click(function() {
    var id =  document.getElementById("id").value;
    var idf =  document.getElementById("idf").value;

    var todo={uid:idf,rid:id };

    $.ajax({
      type: 'POST',
      url: '/request/ignore',
      data:todo,
      success:function(){
          location.reload();
      }
    });
  });

  $("#status").click(function() {
    var id =  document.getElementById("id").value;
    var idf =  document.getElementById("idf").value;
//id beyeb3at le el friend
    var todo={uid:idf , rid:id};
      console.log("my id: "+id+"friend : "+idf);

    $.ajax({
      type: 'POST',
      url: '/request/accept',
      data:todo,
      success:function(){
        alert('request sent');

       document.getElementById("status").value="accepted";
         document.getElementById("status").disabled=true;
          location.reload();
      }
    });
  });
}


});
