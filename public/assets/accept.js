$(function() {
  $('[name=accept]').click(function() {
    var user_id = this.value;
    var url = window.location.toString().split("/");
    var id = url[url.length - 1];
    var todo = {
      uid: user_id,
      rid: id
    };
    $.ajax({
      type: 'POST',
      url: '/request/accept',
      data: todo,

      success: function() {
        location.reload();
      }
    });
  });
});

$(function() {
  $('[name=ignore]').click(function() {
    var user_id = this.value;
    var url = window.location.toString().split("/");
    var id = url[url.length - 1];

    var todo = {
      uid: user_id,
      rid: id
    };

    $.ajax({
      type: 'POST',
      url: '/request/ignore',
      data: todo,
      success: function() {
        location.reload();
      }
    });
  });
});
