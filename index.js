// hambuger
const hamburger = document.querySelector('.hamburger');
const cancel = document.querySelector('.cancel');
const navContainer = document.querySelector('.nav-container');
const navbar = document.querySelector('.navbar');
const desktop = document.querySelector('.desktop-nav');
const navPosition = document.querySelector('.nav-menu');

function showMobileMenu() {
  const bg = './images/overlay.png';
  const lastMenuItem = document.querySelector('.last-menu-item');

  navContainer.style.backgroundImage = `url(${bg})`;
  cancel.style.display = 'block';
  navContainer.style.display = 'block';
  desktop.style.display = 'flex';
  navbar.style.display = 'none';
  lastMenuItem.style.display = 'none';
  navContainer.classList.add('displayMenu');
  navPosition.style.marginTop = '40px';
}

function hideMobileMenu() {
  desktop.style.display = 'none';
  navbar.style.display = 'flex';
  navContainer.style.backgroundImage = 'none';
  navContainer.classList.remove('displayMenu');
}

cancel.addEventListener('click', () => {
  hideMobileMenu();
});

hamburger.addEventListener('click', () => {
  showMobileMenu();
});

const menuItems = document.querySelectorAll('.nav-item');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    hideMobileMenu();
  });
});
