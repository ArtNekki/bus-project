import CustomInput from "./CustomInput";

document.querySelectorAll('[data-input-width-unit]').forEach((el) => {
  new CustomInput(el);
});
