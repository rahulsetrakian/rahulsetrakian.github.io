window.onload = function() {
  const searchInput = document.getElementById("search-bar");
  const iconElement = document.querySelector(".bi-search");

  if (searchInput && iconElement) {
    // Function to change the icon class with a transition
    function changeIcon() {
      // Add a CSS class that defines the transition
      iconElement.classList.add("transition-class");

      // Change the icon class
      iconElement.classList.remove("bi-search");
      iconElement.classList.add("bi-x-lg");

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
      iconElement.classList.remove("bi-x-lg");
      iconElement.classList.add("bi-search");

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