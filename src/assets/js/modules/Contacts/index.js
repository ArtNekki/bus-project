import contactCoords from '../../../../data/contactCoords.json';
import initMap from "../Map";
import Tabby from "tabbyjs";


document.addEventListener('DOMContentLoaded', function() {
  const contactsMap = document.getElementById('contactsMap');

  if(contactsMap) {
    initMap(contactsMap, contactCoords['vladivostok'].coords);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer = document.querySelector('[data-contact-tabs]');

  if (tabsContainer) {
    const tabs = new Tabby('[data-contact-tabs] ul');
    // tabs.toggle('#boxBerry');
  }

});
