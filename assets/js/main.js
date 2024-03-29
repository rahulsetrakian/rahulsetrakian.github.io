// ABOUT PAGE
var paragraphs = document.getElementsByClassName('fall-in');
var windowHeight = window.innerHeight || document.documentElement.clientHeight;

function checkVisibility() {
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    if (isElementInViewport(paragraph)) {
      if (!paragraph.classList.contains('visible')) {
        paragraph.classList.add('visible');
      }
    } else {
      if (paragraph.classList.contains('visible')) {
        paragraph.classList.remove('visible');
      }
    }
  }
}

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= windowHeight
  );
}

// Initial check on page load
checkVisibility();

// Check visibility on scroll
window.addEventListener('scroll', checkVisibility);



//   ABOUT
let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}



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




// CLOSE BUTTON
function openPopup(event) {
  event.preventDefault();

  const imageUrl = event.target.closest('.card-image-item').href;
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const overlayContent = document.createElement('div');
  overlayContent.classList.add('overlay-content');

  const image = document.createElement('img');
  image.src = imageUrl;

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close-btn');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', closePopup);

  overlayContent.appendChild(image);
  overlayContent.appendChild(closeBtn);
  overlay.appendChild(overlayContent);
  document.body.appendChild(overlay);
}

function closePopup() {
  const overlay = document.querySelector('.overlay');
  document.body.removeChild(overlay);
}





const blog_description = document.querySelectorAll('.blog-description');

blog_description.forEach(paragraph => {
  const content = paragraph.textContent;
  const words = content.trim().split(' ');
  if (words.length > 24) {
    const truncatedWords = words.slice(0, 24);
    const truncatedContent = truncatedWords.join(' ');
    paragraph.textContent = truncatedContent + '...';
  }
});

const blog_title = document.querySelectorAll('.blog-url');

blog_title.forEach(paragraph => {
  const content = paragraph.textContent;
  const words = content.trim().split(' ');
  if (words.length > 6) {
    const truncatedWords = words.slice(0, 6);
    const truncatedContent = truncatedWords.join(' ');
    paragraph.textContent = truncatedContent + '...';
  }
});

// TEST CODE
