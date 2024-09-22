// =====================================================
// 1. Função Toggle do Menu de Navegação
// =====================================================
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.menu-toggle');

    if (navLinks && burger) {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    }
}

// =====================================================
// 2. Mudança de Estilo no Scroll
// =====================================================
function handleScroll() {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 90) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// =====================================================
// 3. Otimização do Evento Resize com Debounce
// =====================================================
function handleResize() {
    const screenWidth = window.innerWidth;
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.menu-toggle');

    if (screenWidth > 768 && navLinks && burger) {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        }
    }
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.addEventListener('resize', debounce(handleResize, 200));

// =====================================================
// 4. Manipulação de Eventos após o DOM Carregar
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
    // 4.1. Fechar o menu ao clicar em um link de navegação
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const nav = document.querySelector('.nav-links');
            const burger = document.querySelector('.menu-toggle');
            if (nav && burger) {
                nav.classList.remove('active');
                burger.classList.remove('toggle');
            }
        });
    });

    // 4.2. Inicializar o Carousel
    showSlide(currentSlideIndex);
});

// =====================================================
// 5. Acessibilidade do Menu Toggle via Teclado
// =====================================================
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });
}

// =====================================================
// 6. Carousel de Aplicativos
// =====================================================
let currentSlideIndex = 0;
let carouselInterval;

// Função para mostrar o slide
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide .app-card');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const totalSlides = slides.length;

    if (slides.length === 0) return; // Previne erros se não houver slides

    // Ajusta o índice do slide
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }

    // Calcula o deslocamento
    const offset = -currentSlideIndex * 100;
    const carouselSlide = document.querySelector('.carousel-slide');
    if (carouselSlide) {
        carouselSlide.style.transform = `translateX(${offset}%)`;
    }

    // Atualiza os indicadores (dots)
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

// Funções para navegar nos slides
function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function goToSlide(index) {
    showSlide(index);
}

// Função para iniciar o carousel automático
function startCarousel() {
    carouselInterval = setInterval(nextSlide, 5000); // Avança a cada 5 segundos
}

// Função para pausar o carousel automático
function pauseCarousel() {
    clearInterval(carouselInterval);
}

// Inicia o carousel automático ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
    startCarousel();

    // Pausar o carousel ao interagir com o mouse
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', pauseCarousel);
        carouselContainer.addEventListener('mouseleave', startCarousel);
    }
});

// =====================================================
// 7. Scroll Suave para Seções
// =====================================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// =====================================================
// 8. Formulário de Contato: Feedback de Envio
// =====================================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simulação de envio (substitua com lógica real)
        alert('Sua mensagem foi enviada com sucesso!');
        contactForm.reset();
    });
}


