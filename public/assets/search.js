$(function() {

  $("#submitSearchForm").click(function() {
    var firstname=$('#firstname');
    var lastname=$('#lastname');
    var email=$('#email');
    var hometown=$('#hometown');
    var caption=$(' #caption');
    var searchquery={firstname:firstname.val(),lastname:lastname.val(),email:email.val(),hometown:hometown.val(),caption:caption.val()};
    console.log("I was submitted");
    $.ajax({
      type: 'POST',
      url: '/search',
      data:searchquery
    });
  });
  });
