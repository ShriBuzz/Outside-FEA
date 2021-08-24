// navbar logics
const navBar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-menu');
const navCollapse = document.querySelector('.navbar-collapse');

var distance = $('.navbar').offset().top,
  $window = $(window);

window.addEventListener(
  'resize',
  function () {
    distance = $('.navbar').offset().top;
    $window = $(window);
  },
  true
);

$('.nav-menu').click(function () {
  $('.navbar').toggleClass('nav-collapse-open nav-padding-remove');
});

$window.scroll(function () {
  if ($window.scrollTop() > distance) {
    $('.navbar').addClass('nav-collapse-open');
  } else {
    if (
      $('#hoverNav').hasClass('hover-active') ||
      $('.nav-menu').hasClass('nav-collapse-open')
    ) {
      return;
    } else $('.navbar').removeClass('nav-collapse-open');
  }
});

let hoverToggle = false;

$('#Learn').click(function () {
  $('.language-section').toggleClass('borderBottom');
  $('.navbar').toggleClass('nav-collapse-open');
  $('#Learn').children().toggleClass('active');
  $('#hoverNav').toggleClass('hover-active');
});
