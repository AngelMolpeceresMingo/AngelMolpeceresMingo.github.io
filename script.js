document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation buttons and content cards
    const navButtons = document.querySelectorAll('.nav-button');
    const contentCards = document.querySelectorAll('.content-card');
    
    // Add click event to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get target content ID from button's data attribute
            const targetId = this.getAttribute('data-target');
            const targetContent = document.querySelector(targetId);
            
            // If target doesn't exist, do nothing
            if (!targetContent) return;
            
            // Remove active class from all buttons and contents
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentCards.forEach(card => card.classList.remove('active'));
            
            // Add active class to current button and target content
            this.classList.add('active');
            targetContent.classList.add('active');
        });
    });
    
    // Optional: Add hover effect for cards with mouse position tracking
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;
            
            this.style.setProperty('--x-pos', `${x}px`);
            this.style.setProperty('--y-pos', `${y}px`);
        });
    });
});
