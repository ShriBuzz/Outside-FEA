const navBar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-menu');
const navCollapse = document.querySelector('.navbar-collapse');

window.addEventListener(
  'resize',
  function (event) {
    if (window.innerWidth >= 992) {
      navBar.classList.remove('nav-collapse-open');
    } else {
      if (!navToggle.classList.contains('collapsed')) {
        navBar.classList.add('nav-collapse-open');
      } else navBar.classList.remove('nav-collapse-open');
    }
  },
  true
);

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('collapsed')) {
    navBar.classList.remove('nav-collapse-open');
  } else navBar.classList.add('nav-collapse-open');
});

var distance = $('.navbar').offset().top,
  $window = $(window);

$window.scroll(function () {
  if ($window.scrollTop() >= distance) {
    $('.navbar').addClass('nav-collapse-open');
  } else {
    $('.navbar').removeClass('nav-collapse-open');
  }
});
