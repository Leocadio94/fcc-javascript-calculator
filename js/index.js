$(document).ready(function() {
  var last_result = "0";
  var clear = false;

  $(".button").click(function() {
    var input = $("#txt-cmd");
    if ($(this).text() === "AC") {
      $(input).val("");
    } else if ($(this).text() === "CE") {
      $(input).val($(input).val().slice(0, -1));
    } else if ($(this).text() === "=") {
      var result = eval($(input).val());
      $(input).val(result);
      last_result = result;
      clear = true;
    } else if ($(this).text() === "Ans") {
      $(input).val(last_result);
    } else {
      if (clear) {
        $(input).val("");
        clear = false;
      } 
      $(input).val($(input).val() + $(this).html());
    }
  });
});