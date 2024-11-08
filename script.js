

document.addEventListener("DOMContentLoaded", function () {
    const map = createMap('map', 1.3521, 103.8198);
    const searchLayer = L.layerGroup();
    searchLayer.addTo(map);

    document.querySelector("#searchBtn").addEventListener("click", async function () {
        const searchTerms = document.querySelector("#searchTerms").value;
        
        const center = map.getBounds().getCenter();

        //const data = await search(searchTerms, center.lat, center.lng);
        //const data = await search(1.3521, 103.8198, searchTerms);
        const data = await search(center.lat, center.lng, searchTerms);
        console.log("Center Lat & Lng  ", center.lat, center.lng);
        console.log(data);
        // adding markers to the map for the search results
        addMarkersToMap(data, searchLayer, map);

        var i=0;
        var photoResponseData = [];
        var photoResponseDataPromise = [];
        for (i=0;i<data.results.length;i++){
            console.log(i);

            photoResponseData  = await getPhotoFromFourSquare (data.results[i].fsq_id);
            console.log(photoResponseData);
            console.log(photoResponseData[0].prefix +"original" + photoResponseData[0].suffix);
            console.log(photoResponseData[0].prefix +"100x100" + photoResponseData[0].suffix);
            
            //console.log(photoResponseData[0].suffix);

            photoResponseDataPromise = photoResponseData.Promise;
            console.log(photoResponseData.Promise);
            //console.log(photoResponseDataPromise);
            
            //console.log(photoResponseData.Promise.PromiseResult);

            //console.log(photoResponseData.Promise.PromiseResult[0]);
        }

    });
});


