$(function() {
  $("#getreq").click(function() {
    var url = window.location.toString().split("/");
    var id = url[url.length-1];
    console.log(id);
  //  var todo={id:id};
    console.log('I was pressed');
    $.ajax({
      type: 'POST',
      url: '/getreq/'+id,
    });
  });
});
