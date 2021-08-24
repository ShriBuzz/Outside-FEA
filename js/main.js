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

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  paused: true,
  defaults: { duration: 0.3 },
});

tl.to('.hero-slider-text-container', {
  opacity: 0,
})
  .to('.hero-slider-text-container', { opacity: 1 })
  .to('.hero-slider-img-container', {
    opacity: 0,
  })
  .to('.hero-slider-img-container', { opacity: 1 });

$(document).ready(function () {
  tl.play();
});

let tl1 = gsap.from('.mid-image-container', {
  duration: 1,
  x: '-40vw',
  ease: 'linear',
  scrollTrigger: {
    trigger: '.mid-image-container',
    markers: true,
    start: 'top 65%',
    end: 'bottom 25%',
  },
});

let tl2 = gsap.from('.last-image-container', {
  duration: 1,
  x: '40vw',
  ease: 'linear',
  scrollTrigger: {
    trigger: '.last-image-container',
    markers: true,
    start: 'top 65%',
    end: 'bottom 25%',
  },
});
