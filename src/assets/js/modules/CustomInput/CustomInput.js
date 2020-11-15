export default class InputWithUnit {
  constructor(el) {
    this.$el = el;
    this.$editField = this.$el.querySelector('.input__edit');
    this.$input = this.$el.querySelector('input');

    this.$el.addEventListener('click', this._focus.bind(this));
    this.$editField.addEventListener('blur', this._blur.bind(this));
    this.$editField.addEventListener('input', this._onInput.bind(this));
  }

  _focus() {
    const length = this.$editField.textContent.length;

    this.$editField.focus();
    this.$el.classList.add('focused');
  }

  _blur() {
    this.$editField.isFocused = false;
    this.$el.classList.remove('focused');
  }

  _onInput(e) {
    this.$input.value = e.target.textContent;
  }
}
