const toggle = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
  toggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  const isDark = body.classList.contains("dark");
  toggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
