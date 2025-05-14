
// Trigger animation on button click
document.getElementById("animateBtn").addEventListener("click", function() {
    this.classList.add("animate");
    setTimeout(() => this.classList.remove("animate"), 500);
});

// Save theme preference
function savePreferences() {
    const theme = document.getElementById("themeSelect").value;
    localStorage.setItem("preferredTheme", theme);
    applyTheme(theme);
    document.getElementById("statusMsg").textContent = "Preference saved!";
}

// Apply saved theme on load
function applyTheme(theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
}

// Load preference on page load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("preferredTheme") || "light";
    document.getElementById("themeSelect").value = savedTheme;
    applyTheme(savedTheme);
});
