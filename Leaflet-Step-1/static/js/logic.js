var map = L.map("map", {
    center: [47.1164, -101.2996],
    zoom: 12,

});

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "outdoors-v11",
    accessToken: API_KEY
}).addTo(map);
  
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// d3.json(url).then(function (response) {

//     var stations = response.data.stations;

//     var earthQuakes = [];

//     // Loop through the stations array
//     for (var index = 0; index < stations.length; index++) {
//         var station = stations[index];

//         
//         var earthQuake = L.marker([station.lat, station.lon])
//         .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");

//         // Add the marker to the bikeMarkers array
//         earthQuakes.push(earthQuake);
// }

// L.layerGroup(earthQuakes).addTo(map);
// }

// var legend = L.control({ position: "bottomright" });
//   legend.onAdd = function() {
//     var div = L.DomUtil.create("div", "info legend");



  