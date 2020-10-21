import markerCoords from '../../../../data/markerCoords.json';
import initMap from "../Map";

document.addEventListener('DOMContentLoaded', function() {
  initMap('map', markerCoords);

  const pickupSelector = document.querySelector('#pickupSelector');

  pickupSelector.addEventListener('change', function(e) {
    const locationId = e.target.dataset.id;

    switch(locationId) {
      case 'vladivostok':
        initMap('map', markerCoords);
        break;
      case 'ussurysk':
        initMap('map', markerCoords);
        break;
      case 'nakhodka':
        initMap('map', markerCoords);
        break;
    }
  })
});
