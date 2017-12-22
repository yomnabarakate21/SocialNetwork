$(document).ready(function(){
  if (document.getElementById("status").value!="send friend request"&&document.getElementById("status").value!="accept")
  {
      document.getElementById("status").disabled=true;
  }
  else if (document.getElementById("status").value=="send friend request"){
  $("#status").click(function() {
    var id =  document.getElementById("id").value;
    var idf =  document.getElementById("idf").value;

    var todo={id:id , idf:idf};
      console.log("my id: "+id+"friend : "+idf);
  //  console.log('I was pressed');
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
  $("#status").click(function() {
    var id =  document.getElementById("id").value;
    var idf =  document.getElementById("idf").value;
//id beyeb3at le el friend
    var todo={uid:idf , rid:id};
      console.log("my id: "+id+"friend : "+idf);
  //  console.log('I was pressed');
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
