document.addEventListener("DOMContentLoaded", async function () {

    accuweather_API_KEY = "KEDv3dFCJ3ssWyy1CA2MqY7Awtw41MhL";
    //  Created Mon, 12/02/2024 - 19:57 SGT
    //  API Product: MinuteCast Limited Trial

    accuweather_URL_getAllRegion = "https://dataservice.accuweather.com/locations/v1/regions/";

    accuweather_URLAppend_getAllRegion = "";

    //http://dataservice.accuweather.com/locations/v1/countries/{regionCode}
    accuweather_URL_getRegion_RegionCode = "http://dataservice.accuweather.com/locations/v1/countries/";


    console.log("accuweather.js");
    console.log("DOMContentLoaded for accuweather.js-------------");


    
    //  MinuteCast® Forecasts By Latitude, Longitude
    //  Sample URL for Singapore
    //  https://dataservice.accuweather.com/forecasts/v1/minute?q=1.39%2C103.85&apikey=KEDv3dFCJ3ssWyy1CA2MqY7Awtw41MhL
    //  Lat 1.39 %2C Lng 103.85
    //  Sample return from above
    //  {
    //     "Summary": {
    //       "Phrase": "No precipitation for at least 120 min",
    //       "Type": null,
    //       "TypeId": 0
    //     },
    //     "Summaries": [
    //       {
    //         "StartMinute": 0,
    //         "EndMinute": 119,
    //         "CountMinute": 120,
    //         "MinuteText": "No precipitation for at least %MINUTE_VALUE min",
    //         "Type": null,
    //         "TypeId": 0
    //       }
    //     ],
    //     "Link": "http://www.accuweather.com/en/sg/yio-chu-kang-estate/300595/minute-weather-forecast/300595?lang=en-us&lat=1.39&lon=103.85",
    //     "MobileLink": "http://www.accuweather.com/en/sg/yio-chu-kang-estate/300595/minute-weather-forecast/300595?lang=en-us&lat=1.39&lon=103.85"
    //   }


    

});



// accuweather (accuweatherMinuteCastBaseURL, accuweatherLatSG, accuweatherComma, accuweatherLngSG, accuweatherAPIKey);

async function accuweather(baseURL,  Lat, Seperator1, Lng, APIKey) {
    // Data, StockX, searchProduct
    const URL = baseURL + Lat + Seperator1 + Lng + APIKey;
    const options = {
        method: 'GET',
        url: URL

      };
      console.log("In accuweather()");
      console.log(options);
      try {
          const response = await axios.request(options);
          console.log(response.data);
          console.log(response.data.Summary);
          console.log(response.data.Summaries);
          console.log(response.data.Link);
          console.log(response.data.MobileLink);

          //  window.open(response.data.Link, '_blank');
          // window.open(response.data.Link, '_self');
          
          //   var popup  = window.open("about:blank", "_blank");
          //   console.log(popup);
          //  popup.location = response.data.Link;

        } catch (error) {
          console.error(error);

      }
} //  async function accuweather() {



