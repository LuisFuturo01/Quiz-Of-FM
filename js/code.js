// Ejemplo: Animación de aparición gradual

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const windowHeight = window.innerHeight;
    if (sectionTop - windowHeight / 2 < window.scrollY) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  }
});

// Puedes añadir más funcionalidades con JavaScript según tus necesidades
