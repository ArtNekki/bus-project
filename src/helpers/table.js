module.exports = function(options) {
  const head = options.hash.head ? JSON.parse(options.hash.head) : null;
  const body = options.hash.body ? JSON.parse(options.hash.body) : null;
  const mods = options.hash.mods;
  const root = options.data.root.root;
  let cssClass = 'table';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' table--' + modsList[i].trim();
      }
  }

  cssClass+= allMods;

  let table = `<div class="${cssClass}">
              <div class="table__scroll">
                <table class="table__data">
                  <thead class="table__header">
                    <tr>
                        ${head ? head.map((item) => `
                        <th>
                            <span>${item}</span>
                            <button type="button" class="btn btn--default">
                              <svg class="icon" width="18" height="18">
                                <use xlink:href="${root}assets/img/symbol/sprite.svg#help"></use>
                              </svg>
                            </button>
                        </th>`).join(``) : ``}
                    </tr>
                  </thead>
                  <tbody>
                    ${body ? body.map((row) => `<tr>
                        ${row ? row.map((cell) => `<td>${cell}</td>`).join(``) : ``}    
                    </tr>`).join(``) : ``}
                  </tbody>
                </table>
              </div>
              <div class="table__scroll-bar"></div>
          </div>`;

  return table;
}
