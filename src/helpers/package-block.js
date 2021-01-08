module.exports = function(options) {
  const title = options.hash.title;
  const text = options.hash.text;
  const table = options.hash.table && JSON.parse(options.hash.table);
  const label = options.hash.label;
  const count = options.hash.count;
  const img = options.hash.img;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'package-block';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' package-block--' + modsList[i].trim();
      }
  }

  function renderTable(table) {
    return `<div class="package-block__table">
          <div class="table">
            <table class="table__data">
              <thead class="table__header table__header--uppercase table__header--primary">
              <tr>
                <th>Название</th>
                <th>Размер</th>
                <th>Цена</th>
              </tr>
              </thead>
              <tbody>
                ${table.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join(``)}
              </tbody>
            </table>
          </div>
        </div>`;
  }

  function renderLabel(label) {
    return `<div class="package-block__label">
          ${label}
        </div>`;
  }

  function renderImg(img) {
    return `<img class="package-block__img"
             src="${root}assets/img/content/cargo-packing/${img}.jpg"
             srcset="${root}assets/img/content/cargo-packing/${img}@2x.jpg 2x, ${root}assets/img/content/cargo-packing/${img}@3x.jpg 3x">`;
  }

  cssClass+= allMods;

  const block = `
    <article class="${cssClass}" data-count="${count}">
        <h1 class="package-block__title">${title}</h1>
        <p class="package-block__text">${text}</p>
        ${table ? renderTable(table) : ''}
        ${label ? renderLabel(label) : ''}
        ${renderImg(img)}
      </article>
  `

  return block;
}
