module.exports = function(options) {
  const title = options.hash.title;
  const text = options.hash.text;
  const link = options.hash.link;
  const img = options.hash.img;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'card';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' card--' + modsList[i].trim();
      }
  }


  function renderImg(img) {
    return `<img class="card__img"
             src="${root}assets/img/content/portfolio/${img}.jpg"
             srcset="${root}assets/img/content/portfolio/${img}@2x.jpg 2x, ${root}assets/img/content/portfolio/${img}@3x.jpg 3x">`;
  }

  cssClass+= allMods;

  const block = `
    <article class="${cssClass}">
        ${renderImg(img)}
        <h1 class="card__title">${title}</h1>
        <p class="card__text">
            ${text}
            <a href="${link}" class="link link--blue link--no-underline">
              <span class="link__text">Читать далее</span>
            </a> 
        </p>
        
      </article>
  `

  return block;
}
