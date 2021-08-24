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

var tl = gsap.timeline({ paused: true, reversed: true });

tl.fromTo(
  '#hoverNav',
  {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: Power2.easeOut,
  },
  {
    y: 0,
    opacity: 1,
    pointerEvents: 'auto',
  }
);

$('#Learn').click(function () {
  $('.language-section').toggleClass('borderBottom');
  $('.navbar').toggleClass('nav-collapse-open');
  $('#Learn').children().toggleClass('active');

  toggleNavAnimation(tl);
});

function toggleNavAnimation(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

gsap.registerPlugin(ScrollTrigger);

let heroAnimation = gsap.from('.hero-slider-img-container', {
  duration: 1,
  x: '40vw',
  opacity: 1,
  ease: Power1.easeOut,
  scrollTrigger: {
    trigger: '.hero-slider-img-container',
    start: 'top 65%',
    end: 'bottom 25%',
  },
});

let midImageAnimation = gsap.from('.mid-image-container', {
  duration: 1,
  x: '-40vw',
  ease: Power1.easeOut,
  scrollTrigger: {
    trigger: '.mid-image-container',
    start: 'top 65%',
    end: 'bottom 25%',
  },
});

let midTextAnimation = gsap.from('.mid-text-container', {
  duration: 1,
  x: '40vw',
  ease: Power1.easeOut,
  scrollTrigger: {
    trigger: '.mid-image-container',
    start: 'top 65%',
    end: 'bottom 25%',
  },
});

let lastImageAnimation = gsap.from('.last-image-container', {
  duration: 1,
  x: '40vw',
  ease: Power1.easeOut,
  scrollTrigger: {
    trigger: '.last-image-container',
    start: 'top 65%',
    end: 'bottom 25%',
  },
});

let lastTextAnimation = gsap.from('.last-text-container', {
  duration: 1,
  x: '-40vw',
  ease: Power1.easeOut,
  scrollTrigger: {
    trigger: '.last-image-container',
    start: 'top 65%',
    end: 'bottom 25%',
  },
});

const cardTitle = gsap.utils.toArray('.card-title');
cardTitle.forEach((box) => {
  gsap.from(box, {
    x: '-20vw',
    ease: Power1.easeOut,
    scrollTrigger: {
      trigger: box,
      start: 'top 75%',
      end: 'bottom 25%',
    },
  });
});

const cardContainers = gsap.utils.toArray('.cardSwiper');
cardContainers.forEach((container) => {
  gsap.from(container, {
    x: '20vw',
    ease: Power1.easeOut,
    scrollTrigger: {
      trigger: container,
      start: 'top 75%',
      end: 'bottom 25%',
    },
  });
});
