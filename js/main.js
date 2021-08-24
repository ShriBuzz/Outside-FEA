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

$('.navbar-toggler').click(function () {
  $('.navbar').toggleClass('nav-collapse-open nav-padding-remove');
});

$window.scroll(function () {
  if ($window.scrollTop() > distance) {
    $('.navbar').addClass('nav-bg');
  } else {
    if (
      $('#hoverNav').hasClass('hover-active') ||
      $('.navbar').hasClass('nav-collapse-open')
    ) {
      return;
    } else $('.navbar').removeClass('nav-collapse-open nav-bg');
  }
});

let hoverToggle = false;

$('#Learn').click(function () {
  $('.language-section').toggleClass('borderBottom');
  $('.navbar').toggleClass('nav-collapse-open');
  $('#Learn').children().toggleClass('active');
  $('#hoverNav').toggleClass('hover-active');
});
