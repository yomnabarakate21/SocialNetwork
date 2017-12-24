$(document).ready(function(){
  if(document.getElementById("status").value!="Friends")
{
$("#thefriend").hide();
$("#Nofriend").show();
}
else
{
  $("#thefriend").show();
  $("#Nofriend").hide();
}


if(document.getElementById("status").value!="Accept")
{
document.getElementById("ignore").style.visibility="hidden";
}

  if (document.getElementById("status").value!="Add Friend"&&document.getElementById("status").value!="Accept")
  {
      document.getElementById("status").disabled=true;
  }

  //not friend
 if (document.getElementById("status").value=="Add Friend"){

  $("#status").click(function() {
    var id =  document.getElementById("id").value;
    var idf =  document.getElementById("idf").value;

    var todo={id:id , idf:idf};

    $.ajax({
      type: 'POST',
      url: '/sendfriendreq',
      data:todo,
      success:function(){

        document.getElementById("status").value="Request Sent";
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
       document.getElementById("status").value="accepted";
         document.getElementById("status").disabled=true;
          location.reload();
      }
    });
  });
}


});
