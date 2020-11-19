module.exports = function(options) {
  const label = options.hash.label;
  const checked = options.hash.checked;
  const isBtn = options.hash.add;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'form-tag';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' form-tag--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  function renderTag() {
    return `<label class="${cssClass}">
              <input type="radio" name="form-tag" class="form-tag__input" ${checked ? 'checked' : ''}>
              <div class="form-tag__body">
                <span class="form-tag__text">${label}</span>
                <button type="button" class="form-tag__delete">&#160;</button>
              </div>
           </label>`;
  }

  function renderBtn() {
    return `<button type="button" class="${cssClass} ${cssClass}--add">
              <div class="form-tag__body">
                <i class="icon icon--plus"></i>
                <span class="form-tag__text">Добавить</span>
              </div>
            </button>`;
  }

  return isBtn ? renderBtn() : renderTag();

}
