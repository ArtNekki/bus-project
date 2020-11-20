function clearSiblings(content) {
  console.log('nekki', content.parentNode)
  content.parentNode.querySelectorAll('[data-content]').forEach((item) => {
    item.classList.remove('active');
  });
}

let content = null;

document.addEventListener('change', function(e) {
  const id = e.target.id;

  if (!id) return;

  content = document.querySelector(`[data-content="${id}"]`);

  if (content) {
    clearSiblings(content);
    content.classList.add('active');
  }

  // if (!content) return;


});
