module.exports = function(options) {
  const name = options.hash.name;
  const id = options.hash.id;
  const items = JSON.parse(options.hash.items);
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'switcher';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' switcher--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  function renderItems(items) {
    return items.map((item) => {
      return `<label class="switcher__item">
                <input type="radio" ${id ? `id="${id}"` : ``} ${name ? `id="${name}"` : ``} ${item.checked ? "checked" : ""} class="switcher__input" hidden>
                <span class="switcher__btn">${item.name}</span>
            </label>`
    }).join(``);
  }

   const switcher = `
          <div class="${cssClass}">
            ${renderItems(items)}
          </div>`

  return switcher;
}
