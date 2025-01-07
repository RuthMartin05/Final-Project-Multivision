document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.site-header');
    const scrollThreshold = 50;

    // Función para manejar el scroll
    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Agregar el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Scroll suave para el logo
    const logoLinks = document.querySelectorAll('.logo-link');
    logoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Si estamos en la página principal, hacemos scroll suave hacia arriba
            if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // Si estamos en otra página, redirigimos a la página principal
                window.location.href = 'index.html';
            }
        });
    });

    // Función para duplicar el texto y crear un efecto infinito
    function setupInfiniteScroll() {
        const scrollTexts = document.querySelectorAll('.scroll-text');
        
        scrollTexts.forEach(container => {
            const content = container.innerHTML;
            container.innerHTML = content + content;
        });
    }

    setupInfiniteScroll();
});

