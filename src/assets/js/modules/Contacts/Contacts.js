import contactCoords from '../../../../data/contactCoords.json';
import initMap from "../Map";
import Tabby from "tabbyjs";

export default class ContactsPage {

  constructor() {
    this.$pageContainer = document.getElementById('contactsPage');
    this.$tabsContainer = this.$pageContainer.querySelector('.tabs');
    this.$map = this.$pageContainer.querySelector('#contactsMap');
    this.$toggleList = this.$pageContainer.querySelector('.page-contacts__toggle');
    this.$pointsSwitcher = this.$pageContainer.querySelector('.page-contacts__switcher');
    this.$pointsList = this.$pageContainer.querySelector('.points-list');
    this.$pointCard = this.$pageContainer.querySelector('.point-card');
    this.$select = this.$pageContainer.querySelector('#selectCity');

    this.breakpoint = window.matchMedia(`(min-width: 768px)`);
    this.listIsOpen = true;
    this.activeMapClass = 'page-contacts--map-panel';
    this.activePoint = null;

    this.initPage();
  }

  initPage() {
    this.$pageContainer.classList.add(this.activeMapClass)

    if (this.$map) {
      this.mapApi = initMap(this.$map, contactCoords['vladivostok'].coords);
    }

    this.breakpoint.addListener(this.initTabs.bind(this));
    this.initTabs();

    this.$toggleList.addEventListener('click', this.toggleList.bind(this));

    this.$pointsSwitcher.addEventListener('click', this.switchFilter.bind(this));
    this.$pointsList.addEventListener('click', this.showPointCard.bind(this));
    this.$pointCard.addEventListener('click', this.hidePointCard.bind(this));
    this.$pointCard.addEventListener('click', this.zoomToPoint.bind(this));
    this.$map.addEventListener('click', this.showPointCard.bind(this));
    this.$select.addEventListener('click', this.loadPointsList.bind(this));
    this.$pageContainer.addEventListener('click', this.setActivePoint.bind(this));

    this.loadPointsList();
  }

  initTabs() {
    if (!this.$tabsContainer) return;

    let tabs = new Tabby('.page-contacts .tabs > ul');

    if (this.breakpoint.matches) {
      tabs.destroy()
    } else {
      tabs = new Tabby('.page-contacts .tabs > ul');
    }

    this.toggleTabs();
    tabs.toggle('#contactsMapPanel');
  }

  toggleTabs() {
    this.$pageContainer.addEventListener('tabby', (event) => {

      if (event.detail.content.id.toLowerCase().indexOf('map') != -1) {
        this.$pageContainer.classList.add(this.activeMapClass);
      } else {
        this.$pageContainer.classList.remove(this.activeMapClass);
      }
    });

    // console.log('maaaa')
    //
    // this.$map.scrollIntoView({
    //   behavior: 'smooth'
    // });
  }

  toggleList(e) {
    if (this.listIsOpen) {
      this.$pageContainer.classList.add('page-contacts--hide-list');
      e.target.textContent = 'Скрыть список';
    } else {
      this.$pageContainer.classList.remove('page-contacts--hide-list');
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
    this.loadPointsList();
  }

  showPointCard(e) {
    e.stopPropagation();
    e.preventDefault();

    const point = e.target.closest('[data-point-id]');

    if (!point) return;

    this.$pageContainer.classList.add('page-contacts--details');

    this.setActivePoint(point);
    this.loadPointCard();
  }

  hidePointCard(e) {
    const btn = e.target.closest('[data-close-btn]');

    if (!btn) return;

    this.$pageContainer.classList.remove('page-contacts--details');
  }

  loadPointsList() {
    this.$pointsList.classList.add('loading');

    setTimeout(() => {
      this.$pointsList.classList.remove('loading');
    }, 1500);
  }

  loadPointCard() {
    this.$pointCard.classList.add('loading');

    setTimeout(() => {
      this.$pointCard.classList.remove('loading');
    }, 1500);
  }

  setActivePoint(point) {

    if (this.activePoint) {
      this.activePoint.classList.remove('active');
      this.activePoint = null;
    }

    if (point.dataset && point.dataset.pointId) {
      this.activePoint = point;
      this.activePoint.classList.add('active');
    }
  }

  zoomToPoint(e) {
    const zoom = e.target.closest('[data-zoom-id]');

    if (!zoom) return;

    const currentCoords = contactCoords['vladivostok'].coords.filter((item) => {
      return item.id === zoom.dataset.zoomId;
    })[0];

    if (currentCoords) {

      this.mapApi.setCenter(new google.maps.LatLng(currentCoords.lat, currentCoords.lng))
      this.mapApi.setZoom(16);
    }

    this.$pageContainer.classList.remove('page-contacts--details');
  }
}
