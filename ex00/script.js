let themeButton = document.getElementById("theme-btn");

themeButton.addEventListener('click', function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme"))
    {
        themeButton.textContent = "☀️";
    }
    else
        themeButton.textContent = "🌙";
});