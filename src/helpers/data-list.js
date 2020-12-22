module.exports = function(options) {
  const id = options.hash.id;
  const items = JSON.parse(options.hash.items);
  const mods = options.hash.mods;
  let cssClass = 'data-list';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' data-list--' + modsList[i].trim();
      }
  }

  function renderItems(data) {
    return data.map((item) => {
      return `<li class="data-list__item">
        <span class="data-list__name">${item.name}</span>
        <span class="data-list__value">${item.value}</span>
      </li>`
    }).join(``);
  }

  cssClass+= allMods;

  let list = `
    <ul ${id ? `id="${id}"` : ``} class=${cssClass}>
      ${renderItems(items)}
    </ul>`;

  return list;
}
