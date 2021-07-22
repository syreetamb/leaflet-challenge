var map = L.map("map", {
    center: [47.1164, -10.2996],
    zoom: 2,

});

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    maxZoom: 18,
    id: "outdoors-v11",
    accessToken: API_KEY
}).addTo(map);
  
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

d3.json(url).then(function ({features}) {
    data = features

    features.forEach(feature => {
        var lat = feature.geometry.coordinates[1];
        var lng = feature.geometry.coordinates[0];
        var depth = feature.geometry.coordinates[2];
        var mag = feature.properties.mag;
        var place = feature.properties.place;

        L.circleMarker([lat,lng],
            {'radius':mag*2,
            'color':'black',
            'fillColor':getColor(depth),
            'fillOpacity':.85,
            'weight':1
        }).bindPopup(`Location: ${place}<br>Magnitude: ${mag}`).addTo(map)
    });
});

function getColor(depth) {
    switch (true) {
        case depth>90:
            return 'red';
        case depth>60:
            return 'yellow';
        case depth<61:
            return 'green';
    }
}

var legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML = (
        '<span style="background:red">>90</span><br>\
        <span style="background:yellow">>60</span><br>\
        <span style="background:green"><61</span><br>')
    return div;
  };

  legend.addTo(map);