import createHTMLMapMarker from './HtmlMapMarker';
import { generateMarkerTemplate } from './MarkerTemplate';
import markerCoords from '../../../../data/markerCoords.json';

function initMap(id, coords) {
  const mapContainer = document.getElementById(id);

  if(!mapContainer) return;

  const map = new google.maps.Map(mapContainer, {
    zoom: 9,
    center: new google.maps.LatLng(coords[0].coords.lat, coords[0].coords.lng),
    disableDefaultUI: true,
    styles: [{
      stylers: [{
        saturation: -100
      }]
    }]
  });

  coords.forEach((mark) => {
    createHTMLMapMarker({
      latlng: new google.maps.LatLng(mark.coords.lat, mark.coords.lng),
      map: map,
      html: generateMarkerTemplate(mark.id, mark.count)
    });
  });
}

// document.addEventListener('DOMContentLoaded', function() {
//   initMap('map', markerCoords);
// });

export default initMap;

