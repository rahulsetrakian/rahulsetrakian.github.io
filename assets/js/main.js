









// FADE ANIMATION
function fadeInOnScroll() {
   const elements = document.querySelectorAll('.fade');
   elements.forEach((element) => {
     const rect = element.getBoundingClientRect();
     const windowHeight = window.innerHeight || document.documentElement.clientHeight;
     if (rect.top <= windowHeight && rect.bottom >= 0) {
       element.classList.add('visible');
     } else {
       element.classList.remove('visible');
     }
   });
 }
 
 document.addEventListener('DOMContentLoaded', fadeInOnScroll);
 window.addEventListener('scroll', fadeInOnScroll);











// SCROLL


window.addEventListener('scroll', function() {
   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
   var scrollIcon = document.querySelector('.scroll-icon');
   
   if (scrollPosition > 0) {
     scrollIcon.style.display = 'flex';
   } else {
     scrollIcon.style.display = 'none';
   }
 });
 

















// NAVIGATION
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});
