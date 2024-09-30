document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    function activateLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');

        sections.forEach((section) => section.style.backgroundColor = ''); // Reset background
        sections[index].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(`--section-bg-${index + 1}`);
    }

    activateLink();
    window.addEventListener('scroll', activateLink);
});
