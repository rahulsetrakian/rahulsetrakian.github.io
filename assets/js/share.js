
// Function to open the share URL in a new window
function sharePage(url) {
    window.open(url, '_blank');
  }
  
  // Get the description from the hidden div
  var description = document.getElementById('description').textContent;
  
  // Add click event listeners to the share buttons
  document.getElementById('facebook').addEventListener('click', function() {
    sharePage('https://www.facebook.com/sharer.php?u=' + encodeURIComponent(window.location.href) + '&quote=' + encodeURIComponent(description) + '%0A%0A');
  });
  
  document.getElementById('twitter').addEventListener('click', function() {
    sharePage('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent(description) + '%0A%0A');
  });
  
  document.getElementById('linkedin').addEventListener('click', function() {
    sharePage('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(window.location.href) + '&summary=' + encodeURIComponent(description) + '%0A%0A');
  });
  
  document.getElementById('pinterest').addEventListener('click', function() {
    sharePage('https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(window.location.href) + '&description=' + encodeURIComponent(description) + '%0A%0A');
  });
  
  document.getElementById('reddit').addEventListener('click', function() {
    sharePage('https://www.reddit.com/submit?url=' + encodeURIComponent(window.location.href) + '&title=' + encodeURIComponent(description) + '%0A%0A');
  });
  
  