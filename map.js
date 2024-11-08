function createMap(mapContainerID, lat, lng) {
    const map = L.map(mapContainerID);
    map.setView([lat, lng], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' })
        .addTo(map);
    return map;
}

function addMarkersToMap(searchResults, layer, map) {

    // remove all existing markers from the provided layer
    layer.clearLayers();
    
	 // take one location at a time from data.results
    for (let location of searchResults.results) {
        const lat = location.geocodes.main.latitude;
        const lng = location.geocodes.main.longitude;
        const address = location.location.formatted_address;
        const name = location.name;
        const marker = L.marker([lat, lng]);
        marker.bindPopup(function(){

            const divElement = document.createElement('div');
            divElement.innerHTML = `
                <h3>${location.name}</h3>
                <h4>${location.location.formatted_address}</h4>
            `;
            return divElement;
        });

        // add the marker to the map
        marker.addTo(layer);

        // add the location to the search results
        const searchResultElement = document.createElement('div');
        searchResultElement.textContent = name;
        

        searchResultElement.addEventListener('click', function() {
            map.flyTo([lat, lng], 16);
            marker.openPopup();
        });

        searchResultsContainer.appendChild(searchResultElement);

        // repeat until there are no location left in searchResults.results
    }
}

