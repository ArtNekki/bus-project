module.exports = function(options) {
  const type = options.hash.type;
  const text = options.hash.text;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'alert';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' alert--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  function renderAttention() {
    return `<article class="${cssClass}">
            <svg class="${cssClass}" width="50px" height="45px">
               <use xlink:href="${root}assets/img/symbol/sprite.svg#attention">
            </svg>
            <div class="alert__text">${text}</div>
        </article>`
  }

  let alert = ``;

  switch(type) {
    case 'attention':
      alert = renderAttention();
      break;
    default:

  }

  return alert;
}
