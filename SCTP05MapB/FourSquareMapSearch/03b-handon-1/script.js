document.addEventListener("DOMContentLoaded", async function () {
    let singaporeMap = L.map('map');

    singaporeMap.setView([1.3521, 103.8198], 13);

    let tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(singaporeMap);

    let hdbLayerGroup = L.layerGroup();
    hdbLayerGroup.addTo(singaporeMap);

    let hdbResponse = await axios.get("https://gist.githubusercontent.com/kunxin-chor/a5f5cab3e8a6ad0868134334c1432d9a/raw/ca55e99903d5913fc0e701ddab139472fe7fe4fa/hdb.json");
    addMarkersToLayerGroup(hdbResponse.data, hdbLayerGroup);

    let mallResponse = await axios.get("https://gist.githubusercontent.com/kunxin-chor/a5f5cab3e8a6ad0868134334c1432d9a/raw/ca55e99903d5913fc0e701ddab139472fe7fe4fa/malls.json");

    let mallLayerGroup = L.layerGroup();
    mallLayerGroup.addTo(singaporeMap);

    addMarkersToLayerGroup(mallResponse.data, mallLayerGroup);

    let natureResponse = await axios.get("https://gist.githubusercontent.com/kunxin-chor/a5f5cab3e8a6ad0868134334c1432d9a/raw/ca55e99903d5913fc0e701ddab139472fe7fe4fa/nature.json");
    let natureLayerGroup = L.layerGroup();
    natureLayerGroup.addTo(singaporeMap);

    addMarkersToLayerGroup(natureResponse.data, natureLayerGroup);

    let overlays = {
        "HDB": hdbLayerGroup,
        "Malls": mallLayerGroup,
        "Nature": natureLayerGroup
    }

    L.control.layers({}, overlays).addTo(singaporeMap);

})

function addMarkersToLayerGroup(locationData, layerGroup) {
    for (let location of locationData) {
        let marker = L.marker(location.coordinates);
        marker.addTo(layerGroup);
        marker.bindPopup(`<h1>${location.name}</h1>`);
    }
}
