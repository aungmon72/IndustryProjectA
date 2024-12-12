document.addEventListener("DOMContentLoaded", async function () {
    let singaporeMap = L.map('map');

    singaporeMap.setView([1.3521, 103.8198], 13);

    let tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(singaporeMap);

    let cyclingTrackResponse = await axios.get("cycling.geojson");
    let cyclingLayer = L.geoJson(cyclingTrackResponse.data,{
        "onEachFeature":function(feature, layer) {
            // feature parameter: the current feature being processed by leaflet
            // layer parameter: the layer that will be drawn and add to the map
            layer.addEventListener("click", function(){
                let el = document.createElement("div");

                // create an element from the html strimg
                el.innerHTML = feature.properties.Description;
                // grab all the <td> elements
                let allTDs = el.querySelectorAll("td");
                // the first <td> contains the name
                let name = allTDs[0].innerHTML;
                // the second <td> contains agency
                let agency = allTDs[1].innerHTML;


                layer.bindPopup(`<h1>${name}</h1>
                    <p>Agency: ${agency}</p>
                    `);
            })
        }
    });
    cyclingLayer.addTo(singaporeMap);

    cyclingLayer.setStyle(
        {
            "color": "red"
        }
    )

    let nparkResponse = await axios.get("nparks.geojson");
    let nparkLayer = L.geoJson(nparkResponse.data);
    console.log(nparkResponse.data);
    nparkLayer.setStyle({
        'color': 'brown'
    });
    nparkLayer.addTo(singaporeMap);

})

