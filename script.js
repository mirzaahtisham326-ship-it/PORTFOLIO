document.addEventListener('DOMContentLoaded', () => {
    // 1. Elements ko sirf ek baar select karna ha
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 2. Mobile Menu Toggle (Hamburger)
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Click ko navbar tak mehdood rakhne k liye
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // 3. Menu band karna jab kisi link pe click ho (Mobile k liye zaroori ha)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // 4. Scroll Reveal Animation (Jo sections ko neechy se upar lata ha)
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        reveals.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    // 5. Smooth Scroll (Dhakke k bajaye aram se scroll hoga)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll event listener
    window.addEventListener('scroll', reveal);

    // Page load hote hi ek baar check karna
    reveal();
});
// Carousel Logic for About Section
const initCarousel = () => {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    if (slides.length === 0) return; // Agar carousel na ho to error na aaye

    const nextSlide = () => {
        // Purani slide se 'active' class hatana
        slides[currentSlide].classList.remove('active');

        // Agli slide ka index calculate karna
        currentSlide = (currentSlide + 1) % slides.length;

        // Nayi slide par 'active' class lagana
        slides[currentSlide].classList.add('active');
    };

    // Har 3 second baad image change hogi
    setInterval(nextSlide, 3000);
};

// Is function ko DOMContentLoaded ke andar call karein
initCarousel();
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});