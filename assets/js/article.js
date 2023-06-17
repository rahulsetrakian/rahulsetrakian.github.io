// Get the elements with the necessary classes
const itemDataSpan = document.querySelector('.item-data');
const itemText = document.querySelector('.item-text');

// Function to calculate reading time in minutes
function calculateReadingTime() {
  // Assuming an average reading speed of 200 words per minute
  const wordsPerMinute = 200;
  
  // Get the text content and calculate the number of words
  const textContent = itemText.textContent.trim();
  const wordCount = textContent.split(' ').length;
  
  // Calculate the reading time in minutes
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  // Fill the reading time into the span element
  itemDataSpan.textContent = readingTime;
}

// Call the function to calculate and fill the reading time
calculateReadingTime();
