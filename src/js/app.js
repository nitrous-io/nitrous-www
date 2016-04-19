import 'bootstrap.min';

$('.get-started-btn').tooltip({
  trigger: 'hover'
}).click(function(e) {
  e.preventDefault();
  location.href = 'https://app.nitrous.io/#/signup';
});

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
