
function animateSectionsInView() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight * 0.75) {
            section.classList.add('animate');
        }
    });
}

// Trigger animations on page load and scroll
window.addEventListener('load', animateSectionsInView);
window.addEventListener('scroll', animateSectionsInView);