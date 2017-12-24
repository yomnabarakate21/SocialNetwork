$(function() {

  $("#post_btn").click(function() {
  var id=$("#id_label");
    var caption = $("#caption");
    var privacy=$("#privacy");
      alert(privacy.val());
    var todo = {
      caption: caption.val(),
      poster_id: id.text(),
      ispublic: privacy.val(),
    };
    console.log('I was pressed');
    $.ajax({
      type: 'POST',
      url: '/post',
      data: todo,
      success: function(data) {
      alert('posted!');
      $("#caption").val('');
    }
    });

  });
});
