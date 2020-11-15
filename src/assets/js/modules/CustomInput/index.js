import CustomInput from "./CustomInput";

document.querySelectorAll('[data-input-unit]').forEach((el) => {
  new CustomInput(el);
});
