module.exports = function(options) {
  const title = options.hash.title;
  const text = options.hash.text;
  const link = JSON.parse(options.hash.link);
  const href = options.hash.href;
  const theme = options.hash.theme;
  const imgName= options.hash.imgName;
  const imgWidth = options.hash.imgWidth;
  const imgHeight = options.hash.imgHeight;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'media';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' media--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  // function renderDefault() {
  //   return `<div class="${cssClass}">
  //       <div class="media__img">
  //           <svg ${imgWidth ? `width="${imgWidth}px"` : ``} ${imgHeight ? `height="${imgHeight}px"` : ``}>
  //               <use xlink:href="${root}assets/img/symbol/sprite.svg#${imgName}">
  //           </svg>
  //       </div>
  //       <div class="media__body">
  //           <h2 class="media__title">${title}</h2>
  //           <p class="media__text">${text}</p>
  //       </div>
  //   </div>`
  // }

  function renderImg() {
    return `<div class="media__img">
        <svg ${imgWidth ? `width="${imgWidth}px"` : ``} ${imgHeight ? `height="${imgHeight}px"` : ``}>
            <use xlink:href="${root}assets/img/symbol/sprite.svg#${imgName}">
        </svg>
    </div>`
  }

  function renderThemeTwo() {
    return `<article class="${cssClass} media--theme-two">
         ${imgName ? renderImg() : ``}   
         ${title ? `<h1 class="media__title">${title}</h1>` : ''}
         ${text ? `<p class="media__text">${text}</p>` : ''}
         <div class="media__link">
          ${link ? `<a href="${link.href}" class="link link--lg">
              <div class="link__text">
                  <span>${link.text}</span>
              </div>
          </a>` : ''} 
        </div>  
    </article>`
  }

  function renderDefault() {
    return `<article class="${cssClass}">
        <div class="media__img">
            <svg ${imgWidth ? `width="${imgWidth}px"` : ``} ${imgHeight ? `height="${imgHeight}px"` : ``}>
                <use xlink:href="${root}assets/img/symbol/sprite.svg#${imgName}">
            </svg>
        </div>
         ${title ? `<p class="media__text">${title}</p>` : ''}
         <div class="media__link">
          ${link ? `<a href="${link.href}" class="link link--lg link--blue">
              <div class="link__text">
                  <span>${link.text}</span>
              </div>
          </a>` : ''} 
        </div>  
    </article>`
  }

  let media = ``;

  switch(theme) {
    case 'two':
      media = renderThemeTwo();
      break;
    default:
      media = renderDefault();
  }

  return media;
}
