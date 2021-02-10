module.exports = function(options) {
  const name = options.hash.name;
  const width = options.hash.width;
  const maxWidth = options.hash.maxWidth;
  const height = options.hash.height;
  const breakpoints = options.hash.breakpoints ? JSON.parse(options.hash.breakpoints) : {};
  const alt = options.hash.alt;
  const ext = options.hash.ext || 'jpg';
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'img';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + '' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  return `<picture>
    ${breakpoints.xl ? `<source media="(min-width: 1200px)" srcset="${root}assets/img/content/${name}--xl.${ext} 1x, ${root}assets/img/content/${name}--xl@2x.${ext} 2x, ${root}assets/img/content/${name}--xl@3x.${ext} 3x">` : ``}
    ${breakpoints.lg ? `<source media="(min-width: 992px)" srcset="${root}assets/img/content/${name}--lg.${ext} 1x, ${root}assets/img/content/${name}--lg@2x.${ext} 2x, ${root}assets/img/content/${name}--lg@3x.${ext} 3x">` : ``}
    ${breakpoints.md ? `<source media="(min-width: 768px)" srcset="${root}assets/img/content/${name}--md.${ext} 1x, ${root}assets/img/content/${name}--md@2x.${ext} 2x, ${root}assets/img/content/${name}--md@3x.${ext} 3x">` : ``}
    ${breakpoints.sm ? `<source media="(min-width: 576px)" srcset="${root}assets/img/content/${name}--sm.${ext} 1x, ${root}assets/img/content/${name}--sm@2x.${ext} 2x, ${root}assets/img/content/${name}--sm@3x.${ext} 3x">` : ``}
    <img src="${root}assets/img/content/${name}--xs.${ext}" srcset="${root}assets/img/content/${name}--xs@2x.${ext} 2x, ${root}assets/img/content/${name}--xs@3x.${ext} 3x" ${width ? `width="${width}"` : ``} ${height ? `height="${height}"` : ``} ${maxWidth ? `style="max-width: ${maxWidth}px"` : ``}  alt="${alt}">
  </picture>`
}



