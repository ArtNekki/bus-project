module.exports = function(options) {
  const items = options.hash.items ? JSON.parse(options.hash.items) : null;
  const links = options.hash.links ? JSON.parse(options.hash.links) : null;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'list';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' list--' + modsList[i].trim();
      }
  }

  function renderItems(items) {
    return items.map((item) => {
      return `<li class="list__item">
              <svg class="icon" width="20" height="20">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#check">
              </svg>            
              <span>${item}</span>
          </li>`
    }).join(``);
  }

  function renderLinks(items) {
    return items.map((item) => {
      return `<li class="list__item">
              <svg class="icon" width="23.5" height="19">
                 <use xlink:href="${root}assets/img/symbol/sprite.svg#outer-link">
              </svg>
               <a href="${item.href}" class="link" target="_blank">
                 <div class="link__text">
                    <span>${item.text}</span>
                 </div>
               </a>           
          </li>`
    }).join(``);
  }

  cssClass+= allMods;

  const list = `
    <ul class="${cssClass}">
        ${items ? renderItems(items) : ``}
        ${links ? renderLinks(links) : ``} 
    </ul>
  `;

  return list;
}
