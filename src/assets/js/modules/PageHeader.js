
document.addEventListener('DOMContentLoaded', function() {
  const page = document.documentElement;
  const mobileNavOpen = document.querySelector('#mobileNavOpen');
  const mobileNavClose = document.querySelector('#mobileNavClose');


  mobileNavOpen.addEventListener('click', function() {
    page.classList.add('page--mobile-open');
  });

  mobileNavClose.addEventListener('click', function() {
    page.classList.remove('page--mobile-open');
  });
});
