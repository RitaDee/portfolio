// hambuger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo');
const menu = document.querySelector(".pop-menu ul");

hamburger.addEventListener('click', () => {
  // hamburger.classList.toggle('active');
  // navMenu.classList.toggle('active');
  // logo.classList.toggle('active');
  showMobileMenu();
});

document.querySelectorAll('.link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

function showMobileMenu(){
  //alert("why are you not working?");
  let bg = "./images/overlay.png";
  let navContainer = document.querySelector(".nav-container");
  let dnav = document.querySelector(".desktop-nav");
  let navbar = document.querySelector(".navbar");
  const lastMenuItem = document.querySelector(".last-menu-item");

  navContainer.style.backgroundImage = "url(" + bg + ")";

  navContainer.style.display = "block";
  dnav.style.display = "flex";
  navbar.style.display = "none";
  lastMenuItem.style.display = "none";
  navContainer.classList.add("displayMenu");
}