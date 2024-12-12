console.log("Start script.js");


// const {require} = from "./node_modules/require"
// import require from "./node_modules/require/bin/require-command.js"
// import express, { json as _json } from 'express';
// import GeoJsonGeometriesLookup from "geojson-geometries-lookup";
console.log("Start script.js ===> After import");

function loadImport() {

}

    // //  searchReverseGeocodeClient
    // async function searchReverseGeocodeClient(latitude, longitude, language) {
    //     // Data, StockX, searchProduct
    //     BASE_URI = "https://api-bdc.net/data/reverse-geocode-client";
    //     BASE_URI += "?latitude=" + latitude + "&longitude=" + longitude +  "&localityLanguage=" + language;

    //     const options = {
    //                 method: 'GET',
    //                 url: BASE_URI
    //     }
    //     console.log("In searchReverseGeocodeClient()");
    //     try {
    //         const response = await axios.request(options);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // } //  async function searchReverseGeocodeClient() {

document.addEventListener("DOMContentLoaded", async function () {
    //import require from "require";
    const BASE_API_URL = "http://geodb-free-service.wirefreethought.com/v1/geo/places";
    // const BASE_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/places";

    //  const lookup = require("../../node_modules/coordinate_to_country/index");
    // const lookup = require("coordinate_to_country");

{   // API Keys  
    //  API_KEY ==>    X-RapidAPI-Key is application key
    const API_KEY   = "4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296";

    // API_KEY2 ==>    X-rapidAPI-Key is aungmon
    const API_KEY2  = "8a988dddbamsh57e6e6ee4df3d1bp18a138jsn47f765398510";

    const API_KEY3  = "c96ae9e671msh5312a46f4cfe267p1f9bf4jsn15a301dcee86";
 }   


    //const searchTerms = "offset=0&limit=10";

    function npm_coordinate_to_country_lookup() {
        // console.log(lookup(53.218620, 6.567365, true));
        // console.log(lookup(53.218620, 6.567365));
        //GeoJsonGeometriesLookup();
    }

    function sleep(miliseconds) {
        var currentTime = new Date().getTime();
        while (currentTime + miliseconds >= new Date().getTime()) {}
    }

    async function search(searchTerms) {
        const response = await axios.get(`${BASE_API_URL}`, {
            params: {
                //query: encodeURI(searchTerms),
                query: searchTerms,
                
            },
            headers: {
                Accept: "application/json",
                // Provide the API key here
                Authorization: API_KEY,
                'x-rapidapi-key' : API_KEY
            }
        })
        console.log("encodeURI  ", encodeURI(searchTerms));
        sleep(2000);
        console.log(response.data);
        return response.data;
    }

    async function displaySearchResult(searchTerms, searchResult) {
        const searchResultDisplay = document.querySelector(searchResult);

        //  let searchOutcome = await search(searchTerms);
        //console.log("searchOutome  ",searchOutcome);
        //searchResultDisplay.innerHTML = search(searchTerms);
        //console.log(searchResultDisplay);
        return searchOutcome;

    }
// jobSearch
 
    async function jobSearch() {
        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });

        xhr.open('GET', 'https://jsearch.p.rapidapi.com/estimated-salary?job_title=nodejs%20developer&location=new%20york&location_type=CITY&years_of_experience=ALL');
        xhr.open('GET', 'https://jsearch.p.rapidapi.com/estimated-salary?job_title=nodejs%20developer&location=new%20york&location_type=CITY&years_of_experience=ALL');
        xhr.setRequestHeader('x-rapidapi-key', '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296');
        xhr.setRequestHeader('x-rapidapi-host', 'jsearch.p.rapidapi.com');

        xhr.send(data);
    }


    async function jobSearch1() {
        
        //  Recommended API, JSearch, Job Search
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {
              query: 'doctor jobs in new york',
              page: '1',
              num_pages: '10',
              country: 'us',
              date_posted: 'all'
            },
            headers: {
              'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
              'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
          } catch (error) {
              console.error(error);
          }
    }  //  async function jobSearch1()


    async function jobSearch2() {
       //  Recommended API, JSearch, Job Details
 
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/job-details',
            params: {
                job_id: 'hpyA_5f2KAErFsx0AAAAAA==',
                country: 'us'
            },
            headers: {
                'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }  //  async function jobSearch2()

    async function jobSearch3() {
        //  Recommended API, JSearch, JobSalary
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/estimated-salary',
            params: {
                job_title: 'nodejs developer',
                location: 'new york',
                location_type: 'ANY',
                years_of_experience: 'ALL'
            },
            headers: {
                'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }  //  async function jobSearch3()

    async function jobSearchSGFrontEnd() {
        
        //  Recommended API, JSearch, Job Search
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {
              query: 'engineer jobs in singapore',
              page: '1',
              num_pages: '10',
              country: 'sg',
              date_posted: 'all'
            },
            headers: {
              'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
              'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
          } catch (error) {
              console.error(error);
          }
    }  //  async function jobSearchSGFrontEnd()

    async function jobSearchSG(queryParameter) {
        console.log(queryParameter);
        //  Recommended API, JSearch, Job Search
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {
              query: queryParameter,
              page: '1',
              num_pages: '20',
              country: 'sg',
              date_posted: 'all'
            },
            headers: {
              'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
              'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
          } catch (error) {
              console.error(error);
          }
    }  //  async function jobSearchSGFrontEnd()

//  locationSearchInit

    async function locationSearchInit() {
        var searchTerms = "offset=0&limit=10";
        var searchTerms2 = "offset=5&limit=10";
        var searchTerms2 = "offset=768095&limit=10";
        var searchResult = "#search-result";
        var searchResult2 = "#search-result2";
    
        // var searchTermsA = "offset=0&limit=5&limit=5&query=offset=0";
        // var searchTermsB = "offset=5&limit=5&limit=5&query=offset=0";
                          //offset=5&limit=5&limit=5&query=offset=0
        var searchTermsA = "offset=0&limit=5";
        var searchTermsB = "offset=5&limit=5";
        //var searchTermsB = "offset=768095&limit=10";
    
        var searchResultHeader = [];
        var searchResultHeader2 = [];
    
        console.log("searchTermsA " + searchTermsA);
        //searchResultHeader = await displaySearchResult(`${searchTermsA}`, `${searchResult}`);
        searchResultHeader = await search(searchTermsA);
        //console.log("searchResultHeader " + searchResultHeader);
    
        console.log("searchTermsB " + searchTermsB);
        //searchResultHeader2 = await displaySearchResult(`${searchTermsB}`, `${searchResult}`);
        searchResultHeader2 = await search(searchTermsB);
        //console.log("searchResultHeader2 " + searchResultHeader2);
    
    
    
        // {
        //     "rel": "first",
        //     "href": "/v1/geo/places?offset=0&limit=5&limit=5&query=offset=0"
        // },
        // {
        //     "rel": "next",
        //     "href": "/v1/geo/places?offset=5&limit=5&limit=5&query=offset=0"
        // },
        // {
        //     "rel": "last",
        //     "href": "/v1/geo/places?offset=818630&limit=5&limit=5&query=offset=0"
        // }
    
    } //  async function locationSearchInit() 

    async function locationSearch() {
        var searchTermsOffsetA = "offset=";
        var searchTermsLimitA = "&limit=";
        var searchTermsLimitAA = "5";
        var searchTermsOffsetAA  = 5;
        var searchResultArray = [];
        var searchResultMasterArray = [];
        var  count = 0;
        var count2 = 0;
    
        var countMax = searchResultHeader.metadata.totalCount;
        console.log("countMax = " + countMax);
        countMax = 10;
        console.log("countMax = " + countMax);
    
        for (count=0;count<countMax;count++){
            searchTerms = `${searchTermsOffsetA}` + `${count*searchTermsOffsetAA}` + `${searchTermsLimitA}` 
                        + `${searchTermsLimitAA}`;
            //  console.log("searchTerms = " + searchTerms);
    
            // searchResultArray = await displaySearchResult(`${searchTerms}`, `${searchResult}`);
    
    
            // console.log(searchResultArray.data[0]);
            // console.log(searchResultArray.data[1]);
            // console.log(searchResultArray.data[2]);
            // console.log(searchResultArray.data[3]);
            // console.log(searchResultArray.data[4]);
            // console.log(searchResultArray.data[5]);
            // console.log(searchResultArray.data[6]);
            // console.log(searchResultArray.data[7]);
            // console.log(searchResultArray.data[8]);
            // console.log(searchResultArray.data[9]);
            if (count<searchTermsOffsetAA) {
                //searchResultMasterArray.push(searchResultArray.data[0]);
                count++;
            }
    
            if (count<searchTermsOffsetAA) {
                //searchResultMasterArray.push(searchResultArray.data[1]);
                count++;
            }
    
            if (count<searchTermsOffsetAA) {
                //searchResultMasterArray.push(searchResultArray.data[2]);
                count++;
            }
    
            if (count<searchTermsOffsetAA) {
                //searchResultMasterArray.push(searchResultArray.data[3]);
                count++;
            }
    
            if (count<searchTermsOffsetAA) {
                //searchResultMasterArray.push(searchResultArray.data[4]);
                count++;
            }
    
            if (count<searchTermsOffsetAA) {
            // searchResultMasterArray.push(searchResultArray.data[5]);
            //    count++;
            }
            // searchResultMasterArray.push(searchResultArray.data[5]);
            if (count<searchTermsOffsetAA) {
            // searchResultMasterArray.push(searchResultArray.data[6]);
            //    count++;
            }
    
            if (count<searchTermsOffsetAA) {
            // searchResultMasterArray.push(searchResultArray.data[7]);
            //    count++;
            }
    
            if (count<searchTermsOffsetAA) {
            // searchResultMasterArray.push(searchResultArray.data[8]);
            //    count++;
            }
    
            if (count<searchTermsOffsetAA) {
            // searchResultMasterArray.push(searchResultArray.data[9]);
            //    count++;
            }
    
    
    
        }
        // console.log(searchResultMasterArray);
    }  //  async function locationSearch() 

//postalCodeSG

    async function postalCodeSG() {

        const options = {
            method: 'POST',
            url: 'https://sg-postal-code-information.p.rapidapi.com/postal',
            headers: {
                'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
                'x-rapidapi-host': 'sg-postal-code-information.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            data: { postal: '189969' }
            // data: { postal: '530130' }
            
        };

        console.log("in postalCodeSG() ")
        try {
            console.log("Before AXIO REQUEST");
            const response = await axios.request(options);
            console.log("After AXIO REQUEST");
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }  //  async function postalCodeSG()


//  geoDBCitiesCities

    async function geoDBCitiesCities(geoDBCitiesCitiesURL, x_rapidapi_key, x_rapidapi_host) {
        // Recommended APIs, GeoDB Cities, Cities
        const options = {
            method: 'GET',
            //  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
            url: geoDBCitiesCitiesURL,
            headers: {
              // 'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
              'x-rapidapi-key': x_rapidapi_key,
              //'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
              'x-rapidapi-host': x_rapidapi_host
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
          } catch (error) {
              console.error(error);
          }
    }  //  async function geoDBCitiesCities()

    async function geoDBCitiesCitiesAll() {
        var searchTermsOffsetA = "offset=";
        var searchTermsLimitA = "&limit=";
        var searchTermsLimitAA = "5";
        var searchTermsOffsetAA  = 5;
        var searchResultArray = [];
        var searchResultMasterArray = [];
        var  count = 0;
        var count2 = 0;

        var searchResultHeader = await search(searchTermsA);
    
        var countMax = searchResultHeader.metadata.totalCount;
        console.log("countMax = " + countMax);
        countMax = 10;
        console.log("countMax = " + countMax);
    
        for (count=0;count<countMax;count++){
            searchTerms = `${searchTermsOffsetA}` + `${count*searchTermsOffsetAA}` + `${searchTermsLimitA}` 
                        + `${searchTermsLimitAA}`;
            //  console.log("searchTerms = " + searchTerms);
    
            // searchResultArray = await displaySearchResult(`${searchTerms}`, `${searchResult}`);
    
    
            // console.log(searchResultArray.data[0]);
            // console.log(searchResultArray.data[1]);
            // console.log(searchResultArray.data[2]);
            // console.log(searchResultArray.data[3]);
            // console.log(searchResultArray.data[4]);
            // console.log(searchResultArray.data[5]);
            // console.log(searchResultArray.data[6]);
            // console.log(searchResultArray.data[7]);
            // console.log(searchResultArray.data[8]);
            // console.log(searchResultArray.data[9]);
            if (count<searchTermsOffsetAA) {
                //searchResultMasterArray.push(searchResultArray.data[0]);
                count++;
            }
    
            if (count<searchTermsOffsetAA) {
                //searchResultMasterArray.push(searchResultArray.data[1]);
                count++;
            }
    
            if (count<searchTermsOffsetAA) {
                //searchResultMasterArray.push(searchResultArray.data[2]);
                count++;
            }
    
            if (count<searchTermsOffsetAA) {
                //searchResultMasterArray.push(searchResultArray.data[3]);
                count++;
            }
    
            if (count<searchTermsOffsetAA) {
                //searchResultMasterArray.push(searchResultArray.data[4]);
                count++;
            }
    
            if (count<searchTermsOffsetAA) {
            // searchResultMasterArray.push(searchResultArray.data[5]);
            //    count++;
            }
            // searchResultMasterArray.push(searchResultArray.data[5]);
            if (count<searchTermsOffsetAA) {
            // searchResultMasterArray.push(searchResultArray.data[6]);
            //    count++;
            }
    
            if (count<searchTermsOffsetAA) {
            // searchResultMasterArray.push(searchResultArray.data[7]);
            //    count++;
            }
    
            if (count<searchTermsOffsetAA) {
            // searchResultMasterArray.push(searchResultArray.data[8]);
            //    count++;
            }
    
            if (count<searchTermsOffsetAA) {
            // searchResultMasterArray.push(searchResultArray.data[9]);
            //    count++;
            }
    
    
    
        }
        // console.log(searchResultMasterArray);
    }  //  geoDBCitiesCitiesAll() 

    async function geoDBCitesCountryDetails() {
        // Recommended APIs, GeoDB Cities, Country Details
        const options = {
            method: 'GET',
            //  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/US',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/',
            headers: {
                'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
                'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }  //  async function geoDBCitesCountryDetails() 

    async function geoDBCitiesPlaces() {
        // Recommended APIs, GeoDB Cities, Places
        const options = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/places',
            headers: {
                'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
                'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
            }
        };
        const optionsB = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/places?offset=5&limit=5',
            headers: {
                'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
                'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
            }
        };
        const optionsLast = {
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/places?offset=768095&limit=5',
            headers: {
                'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
                'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        try {
            const response = await axios.request(optionsB);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        try {
            const response = await axios.request(optionsLast);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        // /v1/geo/places?offset=768095&limit=5
        

    }  //  async function geoDBCitiesPlaces() 
    //  ===========================

//  Location

        console.log("Location Search");
    // locationSearchInit();
    // locationSearch();
 

//  Job Search
    
    console.log("Job Search");
{    
    // jobSearch1();
    // jobSearch2();
    // jobSearch3();
    // jobSearchSGFrontEnd();

    // jobSearchSG("Doctor Jobs in Singapore");
    // jobSearchSG("Nurse Jobs in Singapore");
    
    // jobSearchSG("Engineer Jobs in Singapore");
    // jobSearchSG("Technician Jobs in Singapore");
    
    // jobSearchSG("Professor Jobs in Singapore");
    // jobSearchSG("Lecturer Jobs in Singapore");
    // jobSearchSG("Teacher Jobs in Singapore");
    // jobSearchSG("Tutuor Jobs in Singapore");
    
    // jobSearchSG("Front End Jobs in Singapore");
    // jobSearchSG("Back End Jobs in Singapore");
    // jobSearchSG("Full Stack Jobs in Singapore");
    // jobSearchSG("Java Jobs in Singapore");
    // jobSearchSG("Dot Net Jobs in Singapore");
    
    // jobSearchSG("System Engineer Jobs in Singapore");
    // jobSearchSG("Control Engineer Jobs in Singapore")
    // jobSearchSG("Network Engineer Jobs in Singapore");

{    
    // jobSearchSG("AWS Jobs in Singapore");
    // jobSearchSG("Google Jobs in Singapore");

}
{    
    // jobSearchSG("Manager Jobs in Singapore");
    // jobSearchSG("General Manager Jobs in Singapore");
    // jobSearchSG("Director Jobs in Singapore");
    // jobSearchSG("Consultant Jobs in Singapore");

}    
    
{    
    // jobSearchSG("Bell Jobs in Singapore");
    // jobSearchSG("Captain Jobs in Singapore");
}
}
    
{    console.log("Postal Code SG");
     //postalCodeSG();
}    

{    console.log("Recommended API, geoDBCities, Cities");
{
    //geoDBCitiesCities();
    var geoDBCitiesCitiesURL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
    var x_rapidapi_key = 'x_rapidapi_key';
    var x_rapidapi_host = 'wft-geo-db.p.rapidapi.com';
    //  geoDBCitiesCities(geoDBCitiesCitiesURL, x_rapidapi_key, x_rapidapi_host);
} 
}   
    
{    console.log("Recommended API, geoDBCities, Country Details");
    //  geoDBCitesCountryDetails();
}

{    console.log("Recommended API, geoDBCities, Places");
    //  geoDBCitiesPlaces(); 
}

{    console.log("Calling getDevicesByName_GSMArenaParser()");
     // getDevicesByName_GSMArenaParser();
}

{   console.log("Data API, StockX, searchProduct");
    // console.log("Calling searchProductStockX2()");
    //  await searchProductStockX2();
    // console.log("Calling searchProductStockX()");
    //  await searchProductStockX();


}

{   
    console.log("In restCountries");
    //  restCountries();
}

{   
    console.log("restCountries");
    // restCountriesRegionEurope();
    // restCountriesRegionAsia();
    // restCountriesRegionAfrica();
    // restCountriesRegionAmerica();

    // restCountriesRegionAntarctic()
    // restCountriesRegionOceania();

}

{   
    console.log("accuweather ");
{    
    console.log("Calling accuweather()")
    const accuweatherMinuteCastBaseURL = "https://dataservice.accuweather.com/forecasts/v1/minute?q=";
    const accuweatherLatSG             = "1.39";
    const accuweatherComma             = "%2C";
    const accuweatherLngSG             = "103.85";
    const accuweatherAPIKey            = "&apikey=KEDv3dFCJ3ssWyy1CA2MqY7Awtw41MhL"        
    //  await accuweather (accuweatherMinuteCastBaseURL, accuweatherLatSG, accuweatherComma, accuweatherLngSG, accuweatherAPIKey);
}
}

{
    console.log("RapidAPI university"); 
{    
    //  Working
    //  university_GetTopNRanking();
    
    //  Working 
    // university_GetByCountry("India");
    // university_GetByCountry("Singapore");
    // university_GetByCountry("Thailand");
    // university_GetByCountry("Myanmar");
    // university_GetByCountry("Malaysia");
    // university_GetByCountry("Vietnam");
    // university_GetByCountry("Indonesia");

    // university_GetByCountry("China");
     // university_GetByCountry("Japan");

     console.log("npm_coordinate_to_country_lookup");
{
     npm_coordinate_to_country_lookup()

}
}  //  console.log("RapidAPI university"); 


{
    await searchReverseGeocodeClient(1.290270, 103.851959, "en");
    //  Singapore 1.290270, 103.851959
}


}
    console.log("script.js");
    console.log("DOMContentLoaded for script.js-------------");

    






}); //
