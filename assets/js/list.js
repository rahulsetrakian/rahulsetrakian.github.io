window.onload = function() {
  const searchInput = document.getElementById("search-bar");
  const iconElement = document.querySelector(".bx-search");

  if (searchInput && iconElement) {
    // Function to change the icon class with a transition
    function changeIcon() {
      // Add a CSS class that defines the transition
      iconElement.classList.add("transition-class");

      // Change the icon class
      iconElement.classList.remove("bx-search");
      iconElement.classList.add("bx-x");

      // Remove the transition class after a delay (adjust duration as needed)
      setTimeout(() => {
        iconElement.classList.remove("transition-class");
      }, 300); // 300 milliseconds, adjust as needed
    }

    // Function to revert the icon class with a transition
    function revertIcon() {
      // Add a CSS class that defines the transition
      iconElement.classList.add("transition-class");

      // Revert the icon class
      iconElement.classList.remove("bx-x");
      iconElement.classList.add("bx-search");

      // Remove the transition class after a delay (adjust duration as needed)
      setTimeout(() => {
        iconElement.classList.remove("transition-class");
      }, 300); // 300 milliseconds, adjust as needed
    }

    // Add an onclick event listener to the input to change the icon
    searchInput.addEventListener("click", changeIcon);

    // Add a blur event listener to the input to revert the icon
    searchInput.addEventListener("blur", revertIcon);
  } else {
    console.error("Search input or icon element not found.");
  }
};







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
