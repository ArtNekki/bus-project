import createHTMLMapMarker from './HtmlMapMarker';
import { generateMarkerTemplate } from './MarkerTemplate';
import markerCoords from '../../../../data/pickupCoords.json';

function initMap(mapContainer, coords, gestureHandling = 'none', scrollWheel = false) {

  if(!mapContainer) return;

  const map = new google.maps.Map(mapContainer, {
    zoom: 13,
    center: new google.maps.LatLng(coords[0].lat, coords[0].lng),
    disableDefaultUI: true,
    zoomControl: true,
    gestureHandling,
    scrollWheel,
    styles: [{
      stylers: [{
        saturation: -100
      }]
    }]
  });

  coords.forEach((marker) => {
    createHTMLMapMarker({
      latlng: new google.maps.LatLng(marker.lat, marker.lng),
      map: map,
      html: generateMarkerTemplate(marker.id)
    });
  });

  return map;
}

// document.addEventListener('DOMContentLoaded', function() {
//   initMap('map', markerCoords);
// });

export default initMap;

