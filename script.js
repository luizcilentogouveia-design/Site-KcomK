document.addEventListener("DOMContentLoaded", () => {
    const elementosParaAnimar = document.querySelectorAll('.projeto-item, #sobre, .card-depoimento');

    if (elementosParaAnimar.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            }
        });
    }, observerOptions);

    elementosParaAnimar.forEach(elemento => {
        elemento.classList.add('pre-animacao');
        scrollObserver.observe(elemento);
        
        // Medida de segurança: se por acaso o observer não disparar, força a exibição após 1 segundo
        setTimeout(() => {
            elemento.classList.add('visivel');
        }, 1000);
    });
});