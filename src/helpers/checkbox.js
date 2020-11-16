module.exports = function(options) {
  const id = options.hash.id;
  const name = options.hash.name;
  const help = options.hash.help;
  const meta = options.hash.meta;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'checkbox';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' checkbox--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  function renderHelp() {
    return `<button type="button" class="checkbox__help">
        <svg class="icon" width="18" height="18">
          <use xlink:href="${root}assets/img/symbol/sprite.svg#help"></use>
        </svg>
    </button>`;
  }

  function renderMeta(data) {
    return `<span class="checkbox__meta">${data}</span>`
  }

   const checkbox  = `
      <label class="${cssClass}">
        <input type="checkbox" id="${id}" name="${name}" class="checkbox__input">
        <div class="checkbox__body">
            <span class="checkbox__label">Автозапчасти</span>
            ${ meta ? renderMeta(meta) : ''}
            ${ help ? renderHelp() : ''}
        </div>
      </label>`

  return checkbox;
}
