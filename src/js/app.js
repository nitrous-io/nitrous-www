import 'bootstrap.min';

$('.get-started-btn').tooltip({
  trigger: 'hover'
}).click(function(e) {
  e.preventDefault();
  location.href = '/app/#/signup';
});

$('.npm-cmd').click(function() {
  $(this).select();
});

$('.copy-npm-cmd-btn').click(function(e) {
  e.preventDefault();
  $('.npm-cmd').select();
  document.execCommand('copy');
}).tooltip({
  container: 'body',
  trigger: 'hover'
});

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  changeStackName();
  setInterval(changeStackName, 3000);
});

var stacks = ["Ruby", "Python", "NodeJS", "PHP", "Go", "Meteor"];
var i = 0;

const changeStackName = function() {
  var stackNameSpan = $("#stack");
  stackNameSpan.text(stacks[i % stacks.length]);
  i += 1;
};
