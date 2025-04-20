document.addEventListener('DOMContentLoaded', function() {
    // Obtiene todos los botones de navegación y todas las tarjetas de contenido
    const navButtons = document.querySelectorAll('.nav-button');
    const contentCards = document.querySelectorAll('.content-card');
    
    // Agrega evento click a los botones de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtiene el ID del contenido objetivo
            const targetId = this.getAttribute('data-target');
            const targetContent = document.querySelector(targetId);
            
            // Si el objetivo no existe, no hace nada
            if (!targetContent) return;
            
            // Quita la clase 'active' de todos los botones y contenidos
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentCards.forEach(card => card.classList.remove('active'));
            
            // Añade la clase 'active' al botón actual y al contenido objetivo
            this.classList.add('active');
            targetContent.classList.add('active');
            
            // Animación suave para la transición
            targetContent.style.opacity = 0;
            setTimeout(() => {
                targetContent.style.opacity = 1;
            }, 50);
        });
    });
    
    // Opcional: Efectos de hover avanzados para las tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});
