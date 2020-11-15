import Counter from './Counter';

document.querySelectorAll('[data-counter]').forEach((el) => {
  new Counter(el);
  console.log('counter', el);
});


document.addEventListener('counter', function(e) {
  console.log('event', e);
});
