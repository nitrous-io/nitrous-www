import 'bootstrap.min';

$('.get-started-btn').tooltip({
  trigger: 'hover'
}).click(function(e) {
  e.preventDefault();
  location.href = 'https://community.nitrous.io/docs/setup-a-dev-environment';
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
  setInterval(changeStackName, 5000);
});

var stacks = ["rails", "php", "python", "meteor", "node", "django", "wordpress", "go", "jekyll"];
var i = 0;

const changeStackName = function() {
  $('.templates-grid .flex-item').removeClass('selected');
  var stackNameSpan = $("#stack");
  stackNameSpan.text("");
  var curStack = stacks[i % stacks.length];
  var curChar = 0;
  typeOut();

  function typeOut() {
    if (curChar >= curStack.length) return;

    setTimeout(function() {
      stackNameSpan.append(curStack.charAt(curChar));
      typeOut();
      curChar++;
    }, 100);
  }

  $('#' + curStack.toLowerCase()).addClass('selected');
  i += 1;
};
