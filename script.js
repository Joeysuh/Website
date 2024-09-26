// Select the theme toggle checkbox
const themeToggle = document.getElementById('theme-toggle');

// Check localStorage for saved theme preference
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme if it exists
if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeToggle.checked = savedTheme === 'dark-mode';
}

// Event listener to toggle dark mode
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark-mode'); // Save preference
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode'); // Save preference
    }
});
