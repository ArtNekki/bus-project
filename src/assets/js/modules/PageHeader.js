const pageHeader = document.querySelector('.page-header');

function setStickyMenu () {
  if (window.pageYOffset > 0) {
    pageHeader.classList.add('page-header--sticky');
  } else {
    pageHeader.classList.remove('page-header--sticky');
  }
}


document.addEventListener('click', function(e) {

  if (e.target && e.target.id === 'mobileNavOpen') {
    this.documentElement.classList.add('page--mobile-open');
  } else if (e.target && e.target.id === 'mobileNavClose') {
    this.documentElement.classList.remove('page--mobile-open');
  }
});

setStickyMenu();
document.addEventListener('scroll', setStickyMenu);
