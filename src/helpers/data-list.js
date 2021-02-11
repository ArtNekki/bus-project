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

  function renderValue(item) {
    let value = ``;

    if (!item.type) {
      value = `<span class="data-list__value">${item.value}</span>`;
    } else if (item.type === 'link') {
      value = `<span class="data-list__value">
        <a href="${item.href}" class="link link--blue link--no-underline">
            <span class="link__text">${item.value}</span>
        </a></span>`;
    } else if (item.type === 'bold') {
      value = `<b class="data-list__value">${item.value}</b>`;
    } else if (item.type === 'password') {
      value = `<div class="data-list__value">
        <span>${item.value}</span>
        <a href="${item.href}" class="link link--blue" style="position: relative; top: -4px; left: 5px;">
            <span class="link__text">Изменить</span>
        </a> 
        </div>`;
    }

    return value;

  }

  function renderItems(data) {
    return data.map((item) => {
      return `<li class="data-list__item">
        <span class="data-list__name">${item.name}</span>
        ${renderValue(item)}
      </li>`
    }).join(``);
  }

  cssClass+= allMods;

  let list = `
    <ul ${id ? `id="${id}"` : ``} class="${cssClass}">
      ${renderItems(items)}
    </ul>`;

  return list;
}
