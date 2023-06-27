  // Function to count words on the page
  function countWords() {
    var text = document.body.innerText || document.body.textContent;
    var words = text.trim().split(/\s+/);
    return words.length;
  }

  // Function to calculate reading time
  function calculateReadingTime() {
    var wordsPerMinute = 200; // Adjust this value as desired
    var wordCount = countWords();
    var readingTime = Math.ceil(wordCount / wordsPerMinute);

    return readingTime;
  }

  // Update the reading time in the HTML
  var timeDataElement = document.getElementById("timeData");
  if (timeDataElement) {
    var readingTime = calculateReadingTime();
    timeDataElement.textContent = readingTime;
  }



  
  // Generate a random starting number between 1 and 1000
const startingNumber = Math.floor(Math.random() * 1000) + 1;

// Variable to keep track of the current number
let currentNumber = startingNumber;

// Update the span element with the current number
const viewDataElement = document.getElementById("viewData");
viewDataElement.textContent = currentNumber;

// Function to generate and display the next random number
function generateNextRandomNumber() {
  // Increment the current number by 1
  currentNumber++;

  // Update the span element with the new current number
  viewDataElement.textContent = currentNumber;

  // Optional: Log the current number to the console
  console.log(currentNumber);
}

// Example usage:
generateNextRandomNumber(); // Generates and displays the next random number








