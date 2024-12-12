//  https://restcountries.com/v3.1/all

async function restCountries() {
    // Data, StockX, searchProduct
    // const options = {
    //     method: 'GET',
    //     url: 'https://restcountries.com/v3.1/all',
    //     headers: {
    //     //   'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
    //     //   'x-rapidapi-host': 'stockx-api.p.rapidapi.com'
    //     }
    //   };
    const options = {
        method: 'GET',
        url: 'https://restcountries.com/v3.1/all'
      };
      console.log("In restCountries()");
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
} //  async function restCountries() {

async function restCountriesRegion (regionName) {
    //  https://restcountries.com/v3.1/region/Europe
    //  Europe, Asia, Africa, America
    let urlRegion = 'https://restcountries.com/v3.1/region/';
    urlRegion += regionName;
    console.log("urlRegion  ", urlRegion);
    const options = {
        method: 'GET',
        url: urlRegion
      };
      console.log("In restCountries()");
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}  //  async function restCountriesRegion (regionName)

async function restCountriesRegionEurope() {
    restCountriesRegion ("Europe");
}

async function restCountriesRegionAsia() {
    restCountriesRegion ("Asia");
}

async function restCountriesRegionAfrica() {
    restCountriesRegion ("Africa");
}

async function restCountriesRegionAmerica() {
    restCountriesRegion ("Americas");
}

async function restCountriesRegionAntarctic() {
    restCountriesRegion ("Antarctic");
}

async function restCountriesRegionOceania() {
    restCountriesRegion ("Oceania");
}

//  Antarctic, Oceania
