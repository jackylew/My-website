/* =========================
   MOBILE NAVIGATION
========================= */


const menuButton = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {


    navLinks.classList.toggle("active");


});





/* Close menu when link clicked */


document.querySelectorAll(".nav-links a").forEach(link => {


    link.addEventListener("click", () => {


        navLinks.classList.remove("active");


    });


});







/* =========================
   SCROLL ANIMATIONS
========================= */


const observer = new IntersectionObserver((entries) => {


    entries.forEach(entry => {


        if(entry.isIntersecting){


            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";


        }


    });


}, {

    threshold:0.15

});





document.querySelectorAll(

    ".about-card, .skill-card, .project-card, .timeline-item"

)

.forEach(element => {


    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition = "0.6s ease";


    observer.observe(element);


});
