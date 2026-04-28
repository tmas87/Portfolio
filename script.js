const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
  toggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

// Toggle theme
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  const isDark = body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Smooth scroll for navigation (fallback for older browsers)
document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all cards and subsections
document.querySelectorAll('.card, .subsection').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
