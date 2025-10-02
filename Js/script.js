//desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
/*que se repita este script*/

document.addEventListener("DOMContentLoaded", function() {
    const text = "Instituto Tecnológico de Administración de Empresas - San Pedro Sula";
    const speed = 80; // velocidad en ms (ajusta para más lento o más rápido)
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});


// const slides = document.querySelector('.slides');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// let index = 0;

// function showSlide(i) {
//   index = (i + 3) % 3; // 3 imágenes, ajusta según tu cantidad
//   slides.style.transform = `translateX(-${index * 100}%)`;
// }

// nextBtn.addEventListener('click', () => showSlide(index + 1));
// prevBtn.addEventListener('click', () => showSlide(index - 1));

// // Reproducción automática cada 5s
// setInterval(() => showSlide(index + 1), 5000);
