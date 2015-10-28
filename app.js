$( document ).ready(function() {
  $(".operator").on('click', function(){
      var value = $(this).val();
      var current = $("#window").val();
      current += value;
      $("#window").val(current);
  });

  $('.numbers').on('click', function(evt) {
    var current = $("#window").val();
    current += evt.target.value;
    $("#window").val(current);
  });

  $('#equals').on('click', function(event) {
    var answer = eval($('#window').val());
    $('#window').val(answer);
  });

  $('#clear').on('click', function(event) {
    $('#window').val('');
  });
});
