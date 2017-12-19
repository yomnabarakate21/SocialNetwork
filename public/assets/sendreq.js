$(function() {
  $("#btn").click(function() {
    var todo={user_id: '1', reqid:'2'};
    console.log('I was pressed');
    $.ajax({
      type: 'POST',
      url: '/friendreq',
      data:todo,

    });
  });
});
