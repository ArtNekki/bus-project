module.exports = function(options) {
  const id = options.hash.id;
  const name = options.hash.name;
  const label = options.hash.label;
  const help = options.hash.help;
  const meta = options.hash.meta;
  const checked = options.hash.checked;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'radio';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' radio--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  function renderHelp() {
    return `<button type="button" class="radio__help">
        <svg class="icon" width="18" height="18">
          <use xlink:href="${root}assets/img/symbol/sprite.svg#help"></use>
        </svg>
    </button>`;
  }

  function renderMeta(data) {
    return `<span class="radio__meta">${data}</span>`
  }

   const radio  = `
      <div class="${cssClass}">
        <input type="radio" ${id ? `id="${id}"` : ``} ${name ? `name="${name}"` : ``} class="radio__input" ${checked ? 'checked' : ''}>
        <div class="radio__body">
            <label ${id ? `for="${id}"` : ``} class="radio__label">${label}</label>
            ${ meta ? renderMeta(meta) : ''}
            ${ help ? renderHelp() : ''}
        </div>
      </div>`

  return radio;
}
