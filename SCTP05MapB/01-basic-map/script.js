// L is a variable that stores the Leaflet object
// L comes from the Leaflet JS file that we have included
// L.map() returns a new leaflet map object
// and also draws the map
// The only parameter is the ID of the element the map should be drawn it
let singaporeMap = L.map('map');

// Leaflet uses an array to represent lat, lng
// setView takes 2 argument
// arg 1: the center point of the map (using lat lng)
// arg 2: the zoom level
singaporeMap.setView([1.3521, 103.8198], 13);

// the tile layer controls the look and feel of the map
// the first arg is the tile layer library
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(singaporeMap);

// add stuff ('layers') to map
// create a marker layer
let marker = L.marker([1.3851, 103.7449]);
marker.addTo(singaporeMap); // add the layer to the map object

marker.addEventListener("click", function(){
    console.log("Clicked Lot 1");
})

// bindPopup can return HTML or a DOM element
// and it will be displayed over the map
marker.bindPopup(`<h1>Lot 1</h1>
    <p>Developed by City Developments Limited, Lot One was opened in August 1996 as the first major shopping mall in Choa Chu Kang.</p>
    <p>Like a typical suburban mall that time, it featured a Shaw Theatres cinema, an NTUC FairPrice supermarket, a Seiyu (now BHG) department store, the Choa Chu Kang Public Library, a Cathay bowling alley, a video games arcade, a Food Junction food court and slightly over 100 specialty shops.</p>    
`);

// create a circle 
let circle = L.circle([1.3634, 103.8436], {
    "radius": 500,
    "fillColor":"green",
    "color": "black",
    "fillOpacity": 0.7,
    "weight": 5
});
circle.addTo(singaporeMap);

circle.addEventListener("click", function(){
    singaporeMap.flyTo([1.3634, 103.8436], 19);
})