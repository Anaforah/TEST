const quemSomosOriginal = document.querySelector('a[href="#quem-somos"]');
const servicosOriginal = document.querySelector('a[href="#servicos"]');
const menuContainer = document.querySelector('.menu-container-6');

function removeOrInsertLinks() {
  if (window.innerWidth <= 790) {
    const quemSomos = document.querySelector('a[href="#quem-somos"]');
    if (quemSomos) quemSomos.remove();

    const servicos = document.querySelector('a[href="#servicos"]');
    if (servicos) servicos.remove();

  } else {
    if (!document.querySelector('a[href="#quem-somos"]') && quemSomosOriginal) {
      menuContainer.insertBefore(quemSomosOriginal, menuContainer.firstChild);
    }
    if (!document.querySelector('a[href="#servicos"]') && servicosOriginal) {
      if (quemSomosOriginal && quemSomosOriginal.nextSibling) {
        menuContainer.insertBefore(servicosOriginal, quemSomosOriginal.nextSibling);
      } else {
        menuContainer.appendChild(servicosOriginal);
      }
    }
  }
}

window.addEventListener('load', removeOrInsertLinks);
window.addEventListener('resize', removeOrInsertLinks);
