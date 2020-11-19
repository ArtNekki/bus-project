module.exports = function(options) {
  const name = options.hash.name;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'counter';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' counter--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

   const counter = `
             <div class="${cssClass}" data-counter>
                <button type="button" class="counter__btn" data-dec>
                  <i class="icon icon--minus"></i>
                </button>
                <input type="text" name="${name}" class="counter__input" value="0" disabled="true" />
                <button type="button" class="counter__btn" data-inc>
                  <i class="icon icon--plus"></i>
                </button>
             </div>`

  return counter;
}
