
document.addEventListener('click', function(e) {

  if (e.target && e.target.id === 'mobileNavOpen') {
    this.documentElement.classList.add('page--mobile-open');
  } else if (e.target && e.target.id === 'mobileNavClose') {
    this.documentElement.classList.remove('page--mobile-open');
  }
});
