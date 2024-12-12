let singapore = [ 1.290270,103.851959]; // #1 Singapore latlng
let map = L.map('mapSingapore').setView(singapore, 13); // #2 Set the center point

// setup the tile layers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
    { maxZoom: 25, 
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).
      addTo(map);

let singaporeMarker = L.marker([1.29, 103.85]);
singaporeMarker.addTo(map);
singaporeMarker.bindPopup("<p>Singapore</p>")
singaporeMarker.addEventListener('click', function(){
    alert("Singapore");
})

let singaporeZooMarker = L.marker([1.4026483894, 103.788013515]);
singaporeZooMarker.addTo(map);
singaporeZooMarker.bindPopup("<p>Singapore Zoo</p>")
singaporeZooMarker.addEventListener('click', function(){
    alert("Singapore Zoo");
})

let singaporeDiscoveryCentre = L.marker([1.32615202872, 103.673982304]);
singaporeDiscoveryCentre.addTo(map);
singaporeDiscoveryCentre.bindPopup("<p>Singapore Discovery Centre</p>")
singaporeDiscoveryCentre.addEventListener('click', function(){
    alert("Singapore Discovery Centre");
})

let jurongBirdPark = L.marker([1.318707, 103.706442]);
jurongBirdPark.addTo(map);
jurongBirdPark.bindPopup("<p>Jurong Bird Park</p>")
jurongBirdPark.addEventListener('click', function(){
    alert("Jurong Bird Park");
})

function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [ randomLat, randomLng,];
}  // function getRandomLatLng(map)



let circle = L.circle([1.35166526, 103.773663572], {
    color: 'red',
    fillColor:"orange",
    fillOpacity:0.5,
    radius: 500})

// add it to the map
circle.addTo(map);

// create marker cluster
let markerClusterLayer = L.markerClusterGroup();

for (let i = 0; i < 10; i++) {
    let pos = getRandomLatLng(map);
    L.marker(pos).addTo(markerClusterLayer);
}
console.log(markerClusterLayer)
markerClusterLayer.addTo(map);

let group= L.layerGroup(); // 1. create the layer group
L.marker(getRandomLatLng(map)).addTo(group);  // 2. add markers to the group
L.marker(getRandomLatLng(map)).addTo(group);
L.marker(getRandomLatLng(map)).addTo(group);

// add the group layer to the map
group.addTo(map); // 3. add the layer to the map

let group2 = L.layerGroup();
for (let i = 0; i < 5; i++) {
    L.circle(getRandomLatLng(map), {
    color: 'red',
    fillColor:"orange",
    fillOpacity:0.5,
    radius: 500
}).addTo(group2);
}

let group3 = L.layerGroup();
for (let i = 0; i < 5; i++) {
    L.circle(getRandomLatLng(map), {
    color: 'red',
    fillColor:"green",
    fillOpacity:0.5,
    radius: 250
}).addTo(group3);
}

let group4 = L.layerGroup();

// Create an object storing the layers 
let baseLayers ={
    'Markers': group,
    'Circles': group2
}

let overlays = {
    'Green Circle':group3,
    'Bus Stops':group4
}

//  Add the layers to the map
L.control.layers(baseLayers, overlays).addTo(map);

let toggleButton = document.querySelector('#toggle-btn')
toggleButton.addEventListener('click', function(){
    // use hasLayer() to check if the map already have the shopping layer group
    // reminder: group2 contains all the circles
            if (map.hasLayer(group2)) {
                map.removeLayer(group2);
            } else {
                  map.addLayer(group2);
            }
})

//  Create a new map application. The map application should have two layers:
// One layer to show all the available taxi.
// Use the  Restful API endpoint at: https://api.data.gov.sg/v1/transport/taxi-availability

// One layer to show all the available bus stops. 
// Use the JSON file at: https://gist.github.com/kunxin-chor/b0a3e50161cd7a53d1bcdc5cc93b11fe

let responseBusStops
async function readBusStopsJson() {
    
    responseBusStops = await axios.get("bus-stops.json")
    console.log("responseBusStops  Line 139   ~~ >",responseBusStops)

}


function populateBusStops() {
    //let group3 = L.layerGroup();
    let busStopLat = null
    let busStopLng = null
    let busStopIDRecords = []
    let busStopID
    //for (let i = 0; i < responseBusStops.data.length; i++) {
    //for (let i = 0; i < 100; i++) {
    
    for (const [key, value] of Object.entries(responseBusStops.data)) {
         console.log(`${key}: ${value}`);
         busStopIDRecords.push(value)
    }

    for (let busStopID in responseBusStops.data ) {
        //busStopIDRecords.push(busStopID)
    }  // for (let busStopID in responseBusStops.data ) {
    console.log("busStopIDRecords --> ", busStopIDRecords)

    //console.log("keys", busStopIDRecords.keys())

    //let keysArrayBusStop = Object.keys(busStopIDRecords)
    //console.log("keysArrayBustop ==> ", keysArrayBusStop)
    
    let i = 0
    let BusStopIDText
    let busStopLocation
    for (i=0;i< busStopIDRecords.length;) {

        //console.log(BusStopIDText)
        //console.log(BusStopIDRecords[i])
        //keyName = keysArrayBusStop[i].toString()
        
        // busStopLat = BusStopIDText[1]
        // busStopLat = BusStopIDText[0]
        busStopLocation = busStopIDRecords[i]
        busStopLat = busStopLocation[1]
        busStopLng = busStopLocation[0]
        console.log("Bus Stop Location  ** >  ",busStopLat, busStopLng)
        
        i++
        L.circle([busStopLat,busStopLng], {
            color: 'red',
            fillColor:"black",
            fillOpacity:0.5,
            radius: 250
        }).addTo(group4);

    } // for (let BusStopIDDetails in busStopIDArray) {

    //console.log(busStopIDArray.length)
    console.log(responseBusStops.data.length)
    console.log(busStopLat)
    console.log(busStopLng)

    // const object1 = {
    //     a: 'somestring',
    //     b: 42,
    //   };
      
    //   for (const [key, value] of Object.entries(object1)) {
    //     console.log(`${key}: ${value}`);
    //   }
      
    //   // Expected output:
    //   // "a: somestring"
    //   // "b: 42"

}

document.addEventListener("DOMContentLoaded", async function () {
    await readBusStopsJson()
    populateBusStops()
})


