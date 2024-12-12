
let singaporeMap = L.map('map');


singaporeMap.setView([1.3521, 103.8198], 13);


let tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(singaporeMap);

var topoTileLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

function getRandomLatLng(map) {
    // the bounds of a map is the rectangle that stores the coordinates (in lat lng)
    // of the four corner of the visible section of the world
    let bounds = map.getBounds();
    let sw = bounds.getSouthWest();
    let ne = bounds.getNorthEast();
    let latSpan = ne.lat - sw.lat;
    let lngSpan = ne.lng - sw.lng;

    let randomLat = Math.random() * latSpan + sw.lat;
    let randomLng = Math.random() * lngSpan + sw.lng;
    return [randomLat, randomLng];
}
// a marker cluster group is a layer group
// A layer group can store many layers
// For special layer group, like marker cluster, the same logic will be applied
// to all the layers in the group
let markerCluster = L.markerClusterGroup(); // this method is only available because of the marker cluster JavaScript
markerCluster.addTo(singaporeMap);

for (let i = 0; i < 10000; i++) {
    let randomLatLng = getRandomLatLng(singaporeMap);
    L.marker(randomLatLng).addTo(markerCluster);
}

// add new layer group 
// L.layerGroup() is built into leaflet
// A layer group is an essentially a grouping of layers
// (i.e we can add layer)
let circleLayerGroup = L.layerGroup();
circleLayerGroup.addTo(singaporeMap);
for (let i = 0; i < 10; i++) {
    let circle = L.circle(getRandomLatLng(singaporeMap), {
        "radius": Math.floor(Math.random() * 500) + 100,
        "fillColor": "green"
    })
    circle.addTo(circleLayerGroup);
}

let rectangleLayerGroup = L.layerGroup();
rectangleLayerGroup.addTo(singaporeMap);
for (let i = 0; i < 10; i++) {

    let topLeft = getRandomLatLng(singaporeMap);
    let bottomRight = [topLeft[0] + 0.005, topLeft[1]-0.005];
    let rect = L.rectangle([topLeft, bottomRight],
                      {
                        "color": "red",
                        "fillColor":"purple"
                      }  

        )
    rect.addTo(rectangleLayerGroup);
}

// crete a layer control
let overlays = {
    "Cluster": markerCluster,
    "Circles": circleLayerGroup,
    "Rectangles": rectangleLayerGroup
}

let baseLayer = {
    "Open Street Map": tileLayer,
    "Topographic Map": topoTileLayer
}

let layerControl = L.control.layers(baseLayer, overlays);
layerControl.addTo(singaporeMap);