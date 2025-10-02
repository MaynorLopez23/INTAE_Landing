// Desplazamiento suave para los anclajes internos
const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');

        if (targetId && targetId !== '#') {
            event.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Animación de escritura para el titular principal
document.addEventListener('DOMContentLoaded', () => {
    const text = 'Impulsamos el talento tecnológico de Honduras';
    const speed = 70;
    let index = 0;
    const typewriter = document.getElementById('typewriter');

    if (!typewriter) return;

    typewriter.textContent = '';

    (function type() {
        if (index < text.length) {
            typewriter.textContent += text.charAt(index);
            index += 1;
            setTimeout(type, speed);
        }
    })();
});

// Control del menú móvil
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isExpanded));
        navList.classList.toggle('nav-open');
    });

    navList.querySelectorAll('a').forEach((anchor) => {
        anchor.addEventListener('click', () => {
            navToggle.setAttribute('aria-expanded', 'false');
            navList.classList.remove('nav-open');
        });
    });
}
