
// PORTFOLIO SHOWCASE WINDOW

function openFullscreenWindow(imgSrc, altTag, title, url, description) {
    const windowElement = document.querySelector('.fullscreen-window');
    const imgElement = windowElement.querySelector('.window-img');
    const titleElement = windowElement.querySelector('.window-title');
    const urlElement = windowElement.querySelector('.window-link');
    const descriptionElement = windowElement.querySelector('.window-description');
  
    imgElement.src = imgSrc;
    imgElement.alt = altTag;
    titleElement.innerText = title;
    urlElement.href = url;
  
    const paragraphs = description.split('|');
    descriptionElement.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  
    gsap.fromTo(
      windowElement,
      { opacity: 0, visibility: 'visible', scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
    );
  }
  
  function closeFullscreenWindow() {
    const windowElement = document.querySelector('.fullscreen-window');
  
    gsap.to(windowElement, { opacity: 0, scale: 0.9, duration: 0.5, ease: 'power2.out', onComplete: hideWindow });
  
    function hideWindow() {
      windowElement.style.visibility = 'hidden';
    }
  }
  
  
  const readMoreLinks = document.querySelectorAll('.read-more-link');
  readMoreLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const imgSrc = this.dataset.img;
      const altTag = this.dataset.alt;
      const title = this.dataset.title;
      const url = this.dataset.url;
      const description = this.dataset.description;
      openFullscreenWindow(imgSrc, altTag, title, url, description);
    });
  });
  
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', closeFullscreenWindow);
  