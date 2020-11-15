import Counter from './Counter';

document.querySelectorAll('[data-counter]').forEach((el) => {
  new Counter(el);
});
