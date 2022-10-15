const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar-menu');

// navbarMenu.onclick = function () {
//   navbarMenu.classList.toggle('active');
//   navbar.classList.toggle('active');
// };

navbarMenu.addEventListener('click', function () {
  navbarMenu.classList.toggle('active');
  navbar.classList.toggle('active');
});
