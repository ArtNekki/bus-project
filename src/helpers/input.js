module.exports = function(options) {
  const id = options.hash.id;
  const name = options.hash.name;
  const type = options.hash.type;
  const placeholder = options.hash.placeholder;
  const mods = options.hash.mods;
  const unit = options.hash.unit;
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

  let input = null;

  if (unit) {
    input = `
      <div class=${cssClass} data-input-width-unit>
          <div class="input__field">
            <input type=${type} id=${id} name=${name} hidden />
            <span  class="input__edit" contenteditable>${placeholder}</span>
            <span class="input__unit">${unit}</span>
          </div>
      </div>`
  } else {
    input = ` 
      <div class=${cssClass}>
        <input type=${type} id=${id} name=${name} class="input__field" />
      </div>`
  }

  return input;
}
