module.exports = function(options) {
  const text = options.hash.text;
  const type = options.hash.type;
  const disabled = options.hash.disabled;
  const hidden = options.hash.hidden;
  const mods = options.hash.mods;
  const data = options.hash.data;
  const root = options.data.root.root;
  const id = options.hash.id;

  let cssClass = 'btn';
  let allMods = '';
  let allData = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' btn--' + modsList[i].trim();
      }
  }

  if (data !== 'undefined' && data ) {
    const dataList = data.split(',');
      for (let i = 0; i < dataList.length; i++) {
        allData = allData + ' data-' + dataList[i].trim();
      }
  }

  cssClass+= allMods;

  function renderBack() {
    return `<button id="${id}" type="button" class="${cssClass} btn--back" ${allData}>
      <svg width="24px" height="20px">
        <use xlink:href="${root}assets/img/symbol/sprite.svg#back"></use>
      </svg>
      <span>Назад</span>
    </button>`;
  }

  function renderDelete() {
    return `<button id="${id}" type="button" class="${cssClass} ${cssClass}--delete">
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
    return `<button id="${id}" type="${type}" class="${cssClass}" ${disabled ? 'disabled' : ''} ${hidden ? 'hidden' : ''}>
      <span class="btn__text">${text}</span>
    </button>`;
  }

  let btn = null;

  switch(type) {
    case 'delete':
      btn = renderDelete();
      break;
    case 'refresh':
      btn = renderRefresh();
      break;
    case 'back':
      btn = renderBack();
      break;  
    default:
      btn = renderDefault();
  }

  return btn;
}
