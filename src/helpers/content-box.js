module.exports = function(options) {
  const title = options.hash.title;
  const text = options.hash.text;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'content-box';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' content-box--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  let box = `<article class="${cssClass}">
            <h1 class="content-box__title">${title}</h1>
            <div class="content-box__text">${text}</div>
        </article>`;

  return box;
}
