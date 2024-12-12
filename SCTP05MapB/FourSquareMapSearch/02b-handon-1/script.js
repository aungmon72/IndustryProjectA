document.addEventListener("DOMContentLoaded", async function () {
    let singaporeMap = L.map('map');


    singaporeMap.setView([1.3521, 103.8198], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(singaporeMap);
    
    let markerCluster = L.markerClusterGroup();
    markerCluster.addTo(singaporeMap);

    let response = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");
    for (let location of response.data.features[0].geometry.coordinates) {
        let coordinate = [ location[1], location[0]];
      
        L.marker(coordinate).addTo(markerCluster);
    }
})
