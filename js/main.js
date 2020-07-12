$("document").ready(function() {
    $(".counter").countUp();
});
// Scroll top functionality:
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector("#top-btn").style.display = "block";
    } else {
        document.querySelector("#top-btn").style.display = "none";
    }
}
$("footer .scrollTop i").click(function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Hamburger:
const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle("open");
}