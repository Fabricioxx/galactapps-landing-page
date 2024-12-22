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

