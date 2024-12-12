// https://api-bdc.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837&localityLanguage=en
//
document.addEventListener("DOMContentLoaded", async function () {
    
    console.log("big-data-cloud-reverse-geocode-client.js");
    console.log("DOMContentLoaded for big-data-cloud-reverse-geocode-client.js-------------");
   
});


async function searchReverseGeocodeClient(latitude, longitude, language) {
    // Data, StockX, searchProduct
    BASE_URI = "https://api-bdc.net/data/reverse-geocode-client";
    BASE_URI += "?latitude=" + latitude + "&longitude=" + longitude +  "&localityLanguage=" + language;
    
    console.log (BASE_URI);
    const options = {
                method: 'GET',
                url: BASE_URI
    }
    console.log("In searchReverseGeocodeClient()");
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
} //  async function searchReverseGeocodeClient() {


