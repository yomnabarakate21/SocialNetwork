$(function() {
  $('[name=accept]').click(function() {
   var user_id=this.value;
  var url = window.location.toString().split("/");
  var id = url[url.length-1];
    console.log(id);
    //var todo={ uid:user_id};
     var todo={uid:user_id, rid:id};
    console.log('I was pressed');
    $.ajax({
      type: 'POST',
      url: '/request/accept',
      data:todo,

success:function(){
  alert('aaaaa');
    //document.getElementsById("accept").disabled=true;
      location.reload();
    }
    });
  });
});

$(function() {
  $('[name=ignore]').click(function() {
    var user_id=this.value;
    var url = window.location.toString().split("/");
    var id = url[url.length-1];

  //  console.log(id);
  //  var todo={ uid:user_id};
    var todo={uid:user_id, rid:id};
    console.log('I was pressed');
    $.ajax({
      type: 'POST',
      url: '/request/ignore',
      data:todo,
      success:function(){
      //  document.getElementsById("accept").disabled=true;
        location.reload();
      }
    });
  });
});
