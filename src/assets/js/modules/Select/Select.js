const getTemplate = (data = [], placeholder, selectedId) => {
  let text = placeholder || 'Placeholder по умолчанию'

  const items = data.map(item => {
    let cls = '';

    if (item.id === selectedId) {
      text = item.value
      cls = 'selected'
    }

    return `
      <li class="select__item ${cls}" data-type="item" data-id="${item.id}" data-name="${item.name}">${item.value}</li>
    `
  })

  return `
    <div class="select__backdrop" data-type="backdrop"></div>
    <div class="select__field" data-type="input">
      <span data-type="value">${text}</span>
      <i class="fa fa-chevron-down" data-type="arrow"></i>
    </div>
    <div class="select__dropdown">
      <ul class="select__list">
        ${items.join('')}
      </ul>
    </div>
  `
}

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options
    // this.selectedId = options.selectedId

    this.render()
    this.setup()
  }

  render() {

    this.data = Array.from(this.$el.firstElementChild.options).map((item, i) => {
      return {id: i, value: item.value, name: item.textContent, selected: item.selected};
    });

    const placeholder = this.data.shift().name;
    const selected = this.data.filter((item) => item.selected)[0];

    this.selectedId = selected ? selected.id : '0';

    this.$el.classList.add('select')
    this.$el.innerHTML = getTemplate(this.data, placeholder, this.selectedId)

    // if (this.options) {
    //   const {placeholder, data} = this.options
    // }
    //
    // const {placeholder, data} = this.options
    // this.$el.classList.add('select')
    // this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this)
    this.$el.addEventListener('click', this.clickHandler)
    this.$arrow = this.$el.querySelector('[data-type="arrow"]')
    this.$value = this.$el.querySelector('[data-type="value"]')
  }

  clickHandler(event) {
    const {type} = event.target.dataset

    if (type === 'input') {
      this.toggle()
    } else if (type === 'item') {
      const id = event.target.dataset.id
      this.select(id)
    } else if (type === 'backdrop') {
      this.close()
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  get current() {
    return this.data.find(item => {
      return item.id == this.selectedId
    })
  }

  select(id) {
    this.selectedId = id
    this.$value.textContent = this.current.value

    this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
      el.classList.remove('selected')
    })
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')

    this.options.onSelect ? this.options.onSelect(this.current) : null

    this.close()
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$el.classList.add('open')
    this.$arrow.classList.remove('fa-chevron-down')
    this.$arrow.classList.add('fa-chevron-up')
  }

  close() {
    this.$el.classList.remove('open')
    this.$arrow.classList.add('fa-chevron-down')
    this.$arrow.classList.remove('fa-chevron-up')
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHandler)
    this.$el.innerHTML = ''
  }
}
