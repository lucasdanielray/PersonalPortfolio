const modeToggle = document.getElementById('modeToggle');
const body = document.body;

function setMode(isDark) {
  if (isDark) {
    body.classList.add('dark-mode');
    body.classList.remove('bg-light', 'text-dark');
    body.classList.add('bg-dark', 'text-light');
    modeToggle.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    body.classList.remove('bg-dark', 'text-light');
    body.classList.add('bg-light', 'text-dark');
    modeToggle.textContent = '🌙';
  }
}

modeToggle.addEventListener('click', () => {
  const isDark = !body.classList.contains('dark-mode');
  setMode(isDark);
  localStorage.setItem('darkMode', isDark);
});

// On load, set mode from localStorage
const savedMode = localStorage.getItem('darkMode') === 'true';
setMode(savedMode);
