module.exports = function(options) {
  const id = options.hash.id;
  const name = options.hash.name;
  const type = options.hash.type;
  const placeholder = options.hash.placeholder;
  const mods = options.hash.mods;
  const rows = options.hash.rows || 5;
  const error = options.hash.error;
  const root = options.data.root.root;
  let cssClass = 'input input--textarea';
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

  const input =  `<div class="${cssClass}">
                    <textarea ${id ? `id="${id}"` : ``} ${name ? `name="${name}"` : ``} ${rows ? `rows="${rows}"` : ``} class="input__field" ${placeholder ? `placeholder="${placeholder}"` : ``}></textarea>
                    ${error ? renderError(error) : ""}
                  </div>`;

  return input;
}
