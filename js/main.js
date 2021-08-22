const navBar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-menu');
const navCollapse = document.querySelector('.navbar-collapse');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('collapsed')) {
    navBar.classList.remove('nav-collapse-open');
  } else navBar.classList.add('nav-collapse-open');
});
