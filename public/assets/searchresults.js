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
    alert('I was submitted');
    $.ajax({
      type: 'POST',
      url: '/searchresults',
      data: searchquery,
      success: function(data) {
        alert('Success!');
          var result="";
        for (i = 0; i < data.length; i++) {
          //$("#balawi").append(document.createTextNode(data[i].firstname));
          result += '<a href="#">' + data[i].firstname + '</a> <br />' ;

            }
            $("#results").html(result);

        }
      });

    });
  });
