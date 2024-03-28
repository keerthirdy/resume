function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("light-theme")) {
        body.classList.replace("light-theme", "dark-theme");
        document.querySelector(".theme-toggler").classList.replace("fa-sun", "fa-moon");
    } else {
        body.classList.replace("dark-theme", "light-theme");
        document.querySelector(".theme-toggler").classList.replace("fa-moon", "fa-sun");
    }
}