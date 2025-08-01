const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-container-6');
const links = document.querySelectorAll('.menu-container-6 a');

function toggleMenu() {
  const isOpen = menu.classList.toggle('open');
  document.body.classList.toggle('no-scroll', isOpen);

  if (isOpen) {
    hamburger.innerHTML = '&times;'; // ✕
    hamburger.setAttribute('aria-label', 'Fechar menu');
  } else {
    hamburger.innerHTML = '&#9776;'; // ☰
    hamburger.setAttribute('aria-label', 'Abrir menu');
  }
}

hamburger.addEventListener('click', toggleMenu);

// Fecha menu ao clicar num link
links.forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      toggleMenu();
    }
  });
});
