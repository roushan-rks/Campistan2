// const cground = JSON.parse(campground);
// let camp = cground.geometry.coordinates;
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: campground.geometry.coordinates,
  zoom: 10,
});
new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${campground.title}</h4><p>${campground.location}</p>`
    )
  )
  .addTo(map);
