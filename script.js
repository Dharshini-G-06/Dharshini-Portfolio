// ================================
// NAVBAR ACTIVE LINK
// ================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});


// ================================
// NAVBAR CLOSE ON MOBILE
// ================================

const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarLinks.forEach(link => {
    link.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {
            const bsCollapse = new bootstrap.Collapse(
                navbarCollapse,
                { toggle: false }
            );

            bsCollapse.hide();
        }

    });
});


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
    ".section-title, .skill-card, .project-card, .education-card, .contact-box"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// CURRENT YEAR
// ================================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Dharshini Gopu. All Rights Reserved.`;

}