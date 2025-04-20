document.addEventListener('DOMContentLoaded', function() {
    
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    // Get the navigation container
    const mainNav = document.getElementById('main-nav');

    // Use event delegation on the navigation container
    mainNav.addEventListener('click', function(event) {
        // Check if the clicked element is actually a button
        const clickedButton = event.target.closest('.nav-button');
        
        if (!clickedButton) {
            return; // Exit if the click wasn't on a button
        }

        // Get the target section ID from the button's data attribute
        const targetId = clickedButton.getAttribute('data-target');
        const targetSection = document.querySelector(targetId);

        // If target section doesn't exist, do nothing
        if (!targetSection) {
            console.warn(`Target section ${targetId} not found.`);
            return;
        }

        // Remove 'active' class from all buttons and sections
        navButtons.forEach(button => {
            button.classList.remove('active');
        });
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Add 'active' class to the clicked button and the target section
        clickedButton.classList.add('active');
        targetSection.classList.add('active');
    });

    // Optional: Ensure the first button and section are active on load 
    // (already handled by adding 'active' class in HTML, but good practice)
    const initialActiveButton = document.querySelector('.nav-button.active');
    const initialActiveSection = document.querySelector('.content-section.active');
    if (!initialActiveButton || !initialActiveSection) {
        // Fallback if HTML classes weren't set: activate the first ones
        if (navButtons.length > 0 && contentSections.length > 0) {
            navButtons[0].classList.add('active');
            const firstTargetId = navButtons[0].getAttribute('data-target');
            document.querySelector(firstTargetId)?.classList.add('active');
        }
    }
    
}); // End of DOMContentLoaded listener

