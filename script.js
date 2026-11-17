
// Show a welcome message when the website loads
window.addEventListener("load", function () {
    console.log("Welcome to my portfolio!");
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(link.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Welcome button interaction
const discoverButton = document.querySelector('.btn');

if (discoverButton) {
    discoverButton.addEventListener('click', function () {
        console.log("Thanks for visiting my portfolio!");
    });
}

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(function(section) {
    section.classList.add("hidden");
    observer.observe(section);
});
function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString();

    document.getElementById("date").textContent =
        now.toDateString();
}

updateClock();
setInterval(updateClock, 1000);

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(function () {
            loader.style.display = "none";
        }, 800);
    }
});

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", function(event) {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});