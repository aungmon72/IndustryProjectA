document.addEventListener("DOMContentLoaded", async function () {
    

    
    console.log("stockX.js");
    console.log("DOMContentLoaded for stockX.js-------------");

});

function searchProductStockX2() {
    console.log("In searchProductStockX2()");
}

async function searchProductStockX() {
    // Data, StockX, searchProduct
    const options = {
        method: 'GET',
        url: 'https://stockx-api.p.rapidapi.com/search',
        headers: {
          'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
          'x-rapidapi-host': 'stockx-api.p.rapidapi.com'
        }
      };
      console.log("In searchProductStockX()");
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
} //  async function searchProductStockX() {


// async function searchReverseGeocodeClient(latitude, longitude, localityLanguage) {
//     // Data, StockX, searchProduct
//     BASE_URI = "https://api-bdc.net/data/reverse-geocode-client";
//     BASE_URI += "?latitude=" + latitude "&longitude=" + longitude 
//              +  "&localityLanguage=" + localityLanguage;

//     const options = {
//                 method: 'GET',
//                 url: 'https://stockx-api.p.rapidapi.com/search'
//     }
//     console.log("In searchReverseGeocodeClient()");
//       try {
//           const response = await axios.request(options);
//           console.log(response.data);
//       } catch (error) {
//           console.error(error);
//       }
// } //  async function searchReverseGeocodeClient() {





