// ============================================================
// THEME TOGGLE — ON/OFF SWITCH
// Switch ON  = Light mode
// Switch OFF = Dark mode (default)
// ============================================================
const toggle = document.getElementById('themeToggle');
const body   = document.body;

// Load saved theme
const saved = localStorage.getItem('theme');
if (saved === 'light') {
  body.classList.add('light');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }
});

// ============================================================
// ACTIVE NAV LINK — highlight current page
// ============================================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});

// ============================================================
// SCROLL ANIMATIONS — fade-in on enter
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ============================================================
// SMOOTH SCROLL — fallback for older browsers
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
