import contactCoords from '../../../../data/contactCoords.json';
import initMap from "../Map";
import Tabby from "tabbyjs";

function initTabs(breakpoint) {
  let tabs = new Tabby('[data-contact-tabs] ul')

  if (breakpoint.matches) {
    tabs.destroy()
  } else {
    tabs = new Tabby('[data-contact-tabs] ul');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const contactsMap = document.getElementById('contactsMap');

  if(contactsMap) {
    initMap(contactsMap, contactCoords['vladivostok'].coords);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer = document.querySelector('[data-contact-tabs]');

  if (tabsContainer) {
    const breakpoint = window.matchMedia(`(min-width: 768px)`);
    breakpoint.addListener(initTabs);

    initTabs(breakpoint);
  }

});
