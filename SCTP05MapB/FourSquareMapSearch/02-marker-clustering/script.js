
let singaporeMap = L.map('map');


singaporeMap.setView([1.3521, 103.8198], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(singaporeMap);

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