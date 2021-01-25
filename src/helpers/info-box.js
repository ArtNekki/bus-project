module.exports = function(options) {
  const title = options.hash.title;
  const text = options.hash.text;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'info-box';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' info-box--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  let box = `<article class="${cssClass}">
            <h1 class="info-box__title">${title}</h1>
            <div class="info-box__text">${text}</div>
        </article>`;

  return box;
}
