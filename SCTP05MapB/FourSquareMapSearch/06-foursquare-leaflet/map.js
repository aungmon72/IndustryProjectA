
function initMap(canvasElementId, centerLatLng, zoomLevel = 13) {
    let map = L.map(canvasElementId);

    map.setView(centerLatLng, zoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    return map;
}

function displaySearch(locations, layerGroup, resultElement, map) {
    layerGroup.clearLayers();
    resultElement.innerHTML = "";
    for (let result of locations) {
        const marker = displaySearchMarker(result, layerGroup);
        displaySearchResult(result, resultElement, map, marker);
    }
}

function displaySearchMarker(result, layerGroup) {
    // remove all existing results from the search layer group
    const latLng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
    const marker = L.marker(latLng);
    marker.bindPopup(function () {
        return `
                <h1>${result.name}</h1>
                <ul>
                    <li>Address: ${result.location.formatted_address}</li>
                    <li>Opened Now? ${result.closed_bucket}</li>
                </ul>
            `
    })
    marker.addTo(layerGroup);
    return marker;

}

function displaySearchResult(result, resultElement, map, marker) {
        let divElement = document.createElement("div");
        divElement.className = "result"; // <div class="result">
        divElement.innerHTML = `${result.name}`;
        resultElement.appendChild(divElement);
        divElement.addEventListener("click", function () {
            const latLng = [result.geocodes.main.latitude, result.geocodes.main.longitude];
            let r = map.flyTo(latLng, 18);
            map.on("zoomend", function(){
                marker.openPopup();
            })
       
        })
   
}