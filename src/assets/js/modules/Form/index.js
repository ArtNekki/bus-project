function clearSiblings(content) {
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


document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');

  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    this.classList.add('error');
  });
});
