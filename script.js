document.addEventListener("DOMContentLoaded", function () {
    // Typing effect using Typed.js
    var typed = new Typed("#element", {
        strings: ["Web Developer", "Frontend Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Download Resume button
    document.querySelector(".btn:first-child").addEventListener("click", function () {
        window.open("assets/SARAH FATIMA Resume.pdf");
    });

    // Visit GitHub button
    document.querySelector(".btn:last-child").addEventListener("click", function () {
        window.open("https://github.com/Sarahfaatima");
    });
});
