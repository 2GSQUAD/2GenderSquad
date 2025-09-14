document.addEventListener('DOMContentLoaded', () => {
    // Animate sections into view
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Toggle copypasta1 content
    const copypastaTitle = document.querySelector('.copypasta1 .copypasta-title');
    const hiddenContent = document.querySelector('.copypasta1 .hidden-content');

    copypastaTitle.addEventListener('click', () => {
        hiddenContent.classList.toggle('show');
    });
});
