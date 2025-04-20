// Wait for the HTML document to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // Initialize AOS (Animate On Scroll) library
    AOS.init({
        duration: 800, // Duration of animation in milliseconds
        offset: 100,   // Offset (in px) from the original trigger point
        once: true,    // Whether animation should happen only once - while scrolling down
        easing: 'ease-in-out', // Default easing for AOS animations
    });

    // Smooth Scrolling for internal links (starting with #)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent the default instantaneous jump
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Check if the target element exists
            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth' 
                });
            }
        });
    });

    // Optional: Add any other simple, non-content-related interactions here
    // e.g., maybe a subtle effect on the header on scroll, etc.

}); // End of DOMContentLoaded listener
