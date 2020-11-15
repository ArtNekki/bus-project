export default class Counter {
  constructor(el) {
    this.$el = el;

    this._init();
  }

  _init() {
    this._count = 0;

    this.$input = this.$el.querySelector('.counter__input');
    this.$btnInc = this.$el.querySelector('[data-inc]');
    this.$btnDec = this.$el.querySelector('[data-dec]');

    this.$btnInc.addEventListener('click', this._increase.bind(this));
    this.$btnDec.addEventListener('click', this._decrease.bind(this));
  }

  _increase() {
    this._count += 1;
    this._update();
  }

  _decrease() {
    if (this._count > 0) {
      this._count -= 1;
      this._update();
    }
  }

  _update() {
    this.$input.value = this._count;


    let  event;
    const detail = Object.assign({name: this.$input.name, count: this._count});

    if (typeof window.CustomEvent === 'function') {
      event = new CustomEvent('counter', {
        bubbles: true,
        cancelable: true,
        detail
      });

    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('counter', true, true, detail);
    }

    this.$el.dispatchEvent(event);
  }
}
