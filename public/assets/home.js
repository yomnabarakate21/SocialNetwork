$(function() {

  $("#btn").click(function() {
    var caption=$("#caption");
    var todo={caption:caption.val(),poster_id:'1',ispublic:'0'};
    console.log('I was pressed');
    $.ajax({
      type: 'POST',
      url: '/post',
      data:todo,

    });
  });
});
