module.exports = function(options) {
  const text = options.hash.text;
  const type = options.hash.type;
  const disabled = options.hash.disabled;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'btn';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' btn--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  function renderDelete() {
    return `<button type="button" class="${cssClass} ${cssClass}--delete">
      <svg class="icon" width="18" height="18">
        <use xlink:href="${root}assets/img/symbol/sprite.svg#delete"></use>
      </svg>
      <span class="btn__text">Удалить</span>
    </button>`;
  }

  function renderRefresh() {
    return ``;
  }

  function renderDefault() {
    return `<button type="${type}" class="${cssClass}" ${disabled ? 'disabled' : ''}>
      <span class="btn__text">${text}</span>
    </button>`;
  }

  let btn = null;

  switch(type) {
    case 'delete':
      btn = renderDelete();
      break;
    case 'refresh':
      btn = renderRefresh()
      break;
    default:
      btn = renderDefault()
  }

  return btn;
}
