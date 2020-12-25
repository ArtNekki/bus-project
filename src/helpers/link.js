module.exports = function(options) {
  const text = options.hash.text;
  const icon = options.hash.icon;
  const iconPosition = options.hash.iconPosition ? options.hash.iconPosition : 'start';
  const type = options.hash.type;
  const href = options.hash.href;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'link';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
    for (let i = 0; i < modsList.length; i++) {
      allMods = allMods + ' link--' + modsList[i].trim();
    }
  }

  function renderIcon(icon) {
    return `<svg width="${icon.width}" height="${icon.height}">
    <use xlink:href="${root}assets/img/symbol/sprite.svg#${icon.name}"></use>
  </svg>`
  }

  function renderHelpIcon() {
    return `<svg width="22" height="21">
    <use xlink:href="${root}assets/img/symbol/sprite.svg#info"></use>
  </svg>`
  }

  function renderLink(cssClass) {
    return `<a href='${href}' class='${cssClass}'>
            <div class='link__text'>
              <span>${text}</span>
            </div>
          </a>`
  }

  function renderLogoutLink(cssClass) {
    return `<a href='${href}' class='${cssClass}'>
            <div class='link__text'>
              <span>${text}</span>
            </div>
            <svg width="27" height="27">
                <use xlink:href="${root}assets/img/symbol/sprite.svg#user-logged-in"></use>
            </svg>
          </a>`
  }

  function renderHelpLink(cssClass) {
    return `<a href='${href}' class='${cssClass}'>
            ${renderHelpIcon()}
            <div class='link__text'>
              <span>${text}</span>
            </div>
          </a>`
  }

  cssClass+= allMods;

  let link = '';

  switch(type) {
    case 'help':
      link = renderHelpLink(cssClass)
      break;
    case 'logout':
      link = renderLogoutLink(cssClass)
      break;
    default:
      link = renderLink(cssClass)
  }

  return link;
}
