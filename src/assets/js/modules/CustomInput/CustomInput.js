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
    const len = this.$editField.textContent.length;

    this.$editField.focus();
    this.$el.classList.add('focused');

    this._setCursor(len);
  }

  _blur() {
    this.$editField.isFocused = false;
    this.$el.classList.remove('focused');
  }

  _onInput(e) {
    this.$input.value = e.target.textContent;
  }

  _setCursor(pos) {

    const range = document.createRange();
    const selection = window.getSelection();

    if (this.$editField.childNodes[0]) {
      range.setStart(this.$editField.childNodes[0], pos);
      range.collapse(true);
    }

    selection.removeAllRanges();
    selection.addRange(range);
  }
}
