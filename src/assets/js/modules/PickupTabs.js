import Tabby from 'tabbyjs';
import pickupCoords from '../../../data/pickupCoords.json';
import initMap from "./Map";

document.addEventListener('DOMContentLoaded', function() {
  const tabs = new Tabby('[data-tabs] ul');
  tabs.toggle('#boxBerry');
});

document.addEventListener('tabby', function (event) {
  const content = event.detail.content;
  const selector = content.querySelector('.accordion');
  const currentCity = content.querySelector('input:checked') && content.querySelector('input:checked').dataset.id;
  const map = content.querySelector('.map');
  const currentCoords = pickupCoords[content.id];

  if (!selector && !currentCity && !currentCoords) return;

  initMap(map, currentCoords[currentCity].coords);

  selector.addEventListener('change', function(e) {
    initMap(map, currentCoords[e.target.dataset.id].coords);
  });
}, false);
