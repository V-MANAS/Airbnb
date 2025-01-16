

maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,
  center: [77.216721,  28.644800], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
const marker = new maptilersdk.Marker()
  .setLngLat([12.550343, 55.665957])
  .addTo(map);
