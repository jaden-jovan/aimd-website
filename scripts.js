document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Icons
    lucide.createIcons();

    // 2. Navbar Reveal Animation
    // Delays the navbar sliding in so the hero section commands immediate attention.
    const navbar = document.querySelector('.navbar');
    setTimeout(() => {
        navbar.classList.remove('hidden-onload');
    }, 500);

    // 3. Scroll Reveal Animations (Intersection Observer)
    // Watches elements with .fade-up and adds .visible when they scroll into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));


    // 4. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-question');
        button.addEventListener('click', () => {
            // Check if the current item is already active
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(faq => faq.classList.remove('active'));

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

});
