$(function() {

  $("#submitSearchForm").click(function(event) {
    event.preventDefault();
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var email = $('#email');
    var hometown = $('#hometown');
    var caption = $('#caption');
    var searchquery = {
      firstname: firstname.val(),
      lastname: lastname.val(),
      email: email.val(),
      hometown: hometown.val(),
      caption: caption.val()
    };
    $.ajax({
      type: 'POST',
      url: '/searchresults',
      data: searchquery,
      success: function(data) {
        if (data.length > 0) {
          alert('success'+data.length);
          var result = "";
          for (i = 0; i < data.length; i++) {
            result += '<a href="/friend/profile/'+ data[i].user_id +'">'+data[i].firstname +"  "+data[i].lastname+ '</a> <br />';
              $("#results").html(result);
          }
        }
      else{
        alert('MISSING DATA!');
      }

        }


    });

  });
});
