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
