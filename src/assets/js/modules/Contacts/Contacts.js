import contactCoords from '../../../../data/contactCoords.json';
import initMap from "../Map";
import Tabby from "tabbyjs";

export default class ContactsPage {

  constructor() {
    this.$pageContainer = document.getElementById('contactsPage');
    this.$tabsContainer = document.querySelector('[data-contact-tabs]');
    this.$contactsMap = document.getElementById('contactsMap');
    this.$hideListBtn = document.querySelector('[data-close-contacts-ui]');
    this.$filterSwitcher = document.querySelector('[data-filter-switcher]');
    this.$pointsList = document.getElementById('pointsList');

    this.breakpoint = window.matchMedia(`(min-width: 768px)`);
    this.listIsOpen = true;
    this.activeMapClass = 'page-contacts--map-panel';

    this.initPage();
  }

  initPage() {
    this.$pageContainer.classList.add(this.activeMapClass)

    if (this.$contactsMap) {
      initMap(this.$contactsMap, contactCoords['vladivostok'].coords);
    }

    this.breakpoint.addListener(this.initTabs);
    this.initTabs();

    this.$hideListBtn.addEventListener('click', this.toggleList.bind(this));

    this.$filterSwitcher.addEventListener('click', this.switchFilter);
    this.$pointsList.addEventListener('click', this.showPointInfo.bind(this));
  }

  initTabs() {
    if (!this.$tabsContainer) return;

    let tabs = new Tabby('[data-contact-tabs] ul')

    if (this.breakpoint.matches) {
      tabs.destroy()
    } else {
      tabs = new Tabby('[data-contact-tabs] ul');
    }

    this.toggleTabs();
    // tabs.toggle('#contactsMapPanel');
  }

  toggleTabs() {
    this.$pageContainer.addEventListener('tabby', (event) => {

      if (event.detail.content.id.toLowerCase().indexOf('map') != -1) {
        this.$pageContainer.classList.add(this.activeMapClass);
      } else {
        this.$pageContainer.classList.remove(this.activeMapClass);
      }
    });
  }

  toggleList(e) {
    if (this.listIsOpen) {
      this.$pageContainer.classList.add('page--hide-list');
      e.target.textContent = 'Скрыть список';
    } else {
      this.$pageContainer.classList.remove('page--hide-list');
      e.target.textContent = 'Показать список';
    }

    this.listIsOpen = !this.listIsOpen;
  }

  switchFilter(e) {
    const btn = e.target.closest('button');

    if (!btn) return;

    btn.parentNode.querySelectorAll('button').forEach((el) => {
      el.classList.remove('active');
    });

    btn.classList.add('active');
  }

  showPointInfo(e) {
    const id = e.target.closest('[data-point-id]');

    if (!id) return;

    this.$pageContainer.classList.add('page-contacts--details');
  }
}
