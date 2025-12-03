// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      menuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }
  
  // ===== Active Navigation Link =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
  
  // ===== Smooth Scroll for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // ===== Navbar Background on Scroll =====
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'hsla(45, 30%, 96%, 0.98)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.backgroundColor = 'hsla(45, 30%, 96%, 0.95)';
        navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
      }
    });
  }
  
  // ===== Intersection Observer for Animations =====
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate on scroll
  document.querySelectorAll('.feature-card, .content-grid, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
});

// ===== Parallax Effect for Hero =====
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrolled = window.scrollY;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
  }
});