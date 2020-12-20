module.exports = function(options) {
  const id = options.hash.id;
  const name = options.hash.name;
  const type = options.hash.type;
  const placeholder = options.hash.placeholder;
  const mods = options.hash.mods;
  const unit = options.hash.unit;
  const value = options.hash.value;
  const error = options.hash.error;
  const root = options.data.root.root;
  let cssClass = 'input';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' input--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  function renderError(error) {
    return `<span class="input__error">${error}</span>`
  }

  let input = null;

  if (unit) {
    input = `
      <div class="${cssClass}" data-input-width-unit>
          <div class="input__field">
            <input ${type ? `type="${type}"` : ``} ${id ? `id="${id}"` : ``} ${name ? `name="${name}"` : ``} hidden />
            <span  class="input__edit" contenteditable>${placeholder || value || ""}</span>
            <span class="input__unit">${unit}</span>
          </div>
          ${error ? renderError(error) : ""}
      </div>`
  } else {
    input = ` 
      <div class="${cssClass}">
        <input ${type ? `type="${type}"` : ``} ${id ? `id="${id}"` : ``} ${name ? `name="${name}"` : ``} ${value ? `value="${value}"` : ``} ${placeholder ? `placeholder="${placeholder}"` : ``}  class="input__field" />
        ${error ? renderError(error) : ""}
      </div>`
  }

  return input;
}
