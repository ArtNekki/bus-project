document.addEventListener('click', function(e) {

  if (e.target && e.target.id === 'mobileNavOpen') {
    this.documentElement.classList.add('page--mobile-open');
  } else if (e.target && e.target.id === 'mobileNavClose') {
    this.documentElement.classList.remove('page--mobile-open');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const header  = document.querySelector('.page-header');

  function setStickyMenu () {

    if (window.pageYOffset > 0) {
      document.documentElement.classList.add('page--header-sticky');
      document.body.style.paddingTop = `${parseInt(header.getBoundingClientRect().height)}px`;
    } else {
      document.documentElement.classList.remove('page--header-sticky');
      document.body.style = null;
    }
  }

  setStickyMenu();
  document.addEventListener('scroll', setStickyMenu);
  window.addEventListener('resize', setStickyMenu);

});
