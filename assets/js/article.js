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



  


