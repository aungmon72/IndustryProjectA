document.addEventListener("DOMContentLoaded", function () {
    main();
})

async function main() {
    const singaporeMap = initMap("map", [1.2761,103.8458]);
    const searchLayerGroup = L.layerGroup();
    searchLayerGroup.addTo(singaporeMap);

    document.querySelector("#search-button")
        .addEventListener("click", async function(){
            const center = singaporeMap.getCenter();

            // get what the user wants to search
            const searchTerms = document.querySelector("#searchTerms").value;

            // display the markers
            const locations = await searchPlaces(center.lat, center.lng, searchTerms);

            // display the list of results and the markers
            const resultElement = document.querySelector("#search-results");
           displaySearch(locations.results, searchLayerGroup, resultElement, singaporeMap);

        })

   

}



