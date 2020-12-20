module.exports = function(options) {
  const id = options.hash.id;
  const items = JSON.parse(options.hash.items);
  const mods = options.hash.mods;
  let cssClass = 'order-list';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' order-list--' + modsList[i].trim();
      }
  }

  function renderItems(data) {
    return data.map((item) => {
      return `<li class="order-list__item">
        <span class="order-list__name">${item.name}</span>
        <span class="order-list__value">${item.value}</span>
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
