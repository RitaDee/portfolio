// hambuger
const hamburger = document.querySelector('.hamburger');

function showMobileMenu() {
  const bg = './images/overlay.png';
  const navContainer = document.querySelector('.nav-container');
  const desktop = document.querySelector('.desktop-nav');
  const navbar = document.querySelector('.navbar');
  const lastMenuItem = document.querySelector('.last-menu-item');
  const cancel = document.querySelector('.cancel');

  navContainer.style.backgroundImage = `url(${bg})`;
  cancel.style.display = 'block';
  navContainer.style.display = 'block';
  desktop.style.display = 'flex';
  navbar.style.display = 'none';
  lastMenuItem.style.display = 'none';
  navContainer.classList.add('displayMenu');
}

hamburger.addEventListener('click', () => {
  showMobileMenu();
});
