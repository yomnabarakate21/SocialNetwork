$(function() {

  $("#submitSearchForm").click(function(event) {
    event.preventDefault();
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var email = $('#email');
    var hometown = $('#hometown');
    var caption = $('#caption');
    var myid = $('#id');
    var searchquery = {
      firstname: firstname.val(),
      lastname: lastname.val(),
      email: email.val(),
      hometown: hometown.val(),
      caption: caption.val(),
    };
    $.ajax({
      type: 'POST',
      url: '/searchresults',
      data: searchquery,
      success: function(data) {

        if (data.length > 0) {
          var result = "";
          for (i = 0; i < data.length; i++) {
             
             result += '<li style="padding:30px; margin: 0px auto; display:inline-grid;"><a href="/friend/profile/'+ myid.val() +'/'+ data[i].user_id + '">' +
               '<img  alt="Poster Pic" src="http://localhost:4001/public/images/upload_images/' + data[i].profile_picture +'"   "height="100" width="100"" class="img-circle" >' + '<br>' +
               data[i].firstname + "  " + data[i].lastname + '</a></li>';

            $("#results").html(result);
          }
        } else {
          alert('MISSING DATA!');
        }

      }


    });

  });
});
