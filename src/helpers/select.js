module.exports = function(options) {
  const id = options.hash.id;
  const name = options.hash.name;
  const data = JSON.parse(options.hash.data);
  const placeholder = options.hash.placeholder;
  const mods = options.hash.mods;
  const unit = options.hash.unit;
  const root = options.data.root.root;
  let cssClass = 'select';
  let allMods = '';

  if (mods !== 'undefined' && mods ) {
    const modsList = mods.split(',');
      for (let i = 0; i < modsList.length; i++) {
        allMods = allMods + ' select--' + modsList[i].trim();
      }
  }

  function renderOptions(data) {
    return data.map((item) => {
      return `<option value="${item.value}" ${!!item.selected && "selected"}>${item.name}</option>`
    }).join(``);
  }

  function renderData(data) {
    return data.map((item) => {

      if (item.group) {
        return `<optgroup label="${item.group}">
                   ${renderOptions(item.data)}     
                </optgroup>`
      } else {
        return `<option value="${item.value}" ${!!item.selected && "selected"}>${item.name}</option>`
      }
    }).join(``);
  }

  cssClass+= allMods;

  let select = `
    <div class="${cssClass}">
      <select id=${id} name=${name} class="select__field">
        ${renderData(data)}
      </select>
    </div>
      `;

  return select;
}
