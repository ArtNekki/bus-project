module.exports = function(options) {
  const title = options.hash.title;
  const text = options.hash.text;
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

  const media = `<a href="#" class="${cssClass}">
        <div class="media__img">
            <svg ${imgWidth ? `width="${imgWidth}px"` : ``} ${imgHeight ? `height="${imgHeight}px"` : ``}>
                <use xlink:href="${root}assets/img/symbol/sprite.svg#${imgName}">
            </svg>
        </div>
        <div class="media__body">
            <h2 class="media__title">${title}</h2>
            <p class="media__text">${text}</p>
<!--            <i class="media__arrow"></i>-->
        </div>
    </a>`

  return media;
}
