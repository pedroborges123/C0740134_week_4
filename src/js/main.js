$(document).ready(function () {

  setInterval(function () {
    var date = new Date();
    $('body h2').html('The date and time is ' + date);
  }, 1000);
});
