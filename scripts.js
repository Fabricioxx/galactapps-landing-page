function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

    // Adiciona animações ao ícone de hambúrguer
    const burger = document.querySelector('.menu-toggle');
    burger.classList.toggle('toggle');
}

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 90) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.menu-toggle');

    if (screenWidth > 768) {
        // Verifica se o menu está ativo e fecha se necessário
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links li a'); // Seleciona todos os links do menu

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const nav = document.querySelector('.nav-links'); // Seleciona o contêiner dos links
            nav.classList.remove('active'); // Remove a classe 'active', fechando o menu

            // Caso o ícone de hambúrguer esteja em um estado 'ativo', desativa-o
            const burger = document.querySelector('.menu-toggle');
            if (burger.classList.contains('toggle')) {
                burger.classList.remove('toggle');
            }
        });
    });
});

let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide .app-card');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }

    const offset = -currentSlideIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;

    const dots = document.querySelectorAll('.carousel-dots .dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function goToSlide(index) {
    showSlide(index);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
});



