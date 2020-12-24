module.exports = function(options) {
  const letter = options.hash.letter;
  const cities = JSON.parse(options.hash.cities);
  const mods = options.hash.mods;
  let cssClass = 'cities-block';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' cities-block--' + modsList[i].trim();
      }
  }

  function renderCities(data) {
    return data.map((item) => {
      return `<li class="cities-block__name">${item}</li>`
    }).join(``);
  }

  cssClass+= allMods;

  let block = `
        <artcile class="${cssClass}">
          <div class="cities-block__letter">${letter}</div>
          <ul class="cities-block__list">
              ${renderCities(cities)}
          </ul>
        </artcile>
      `;

  return block;
}
