$(function() {

  $("#submitSearchForm").click(function(event) {
    event.preventDefault();
    var firstname=$('#firstname');
    var lastname=$('#lastname');
    var email=$('#email');
    var hometown=$('#hometown');
    var caption=$('#caption');
    var searchquery={firstname:firstname.val(),lastname:lastname.val(),email:email.val(),hometown:hometown.val(),caption:caption.val()};
    alert('I was submitted');
    $.ajax({
      type: 'POST',
      url: '/searchresults',
      data:searchquery,
      success: function(data) {
      alert(data.name);
       document.getElementById('label1').innerHTML = 'hi';
      }

    });
    });
  });
