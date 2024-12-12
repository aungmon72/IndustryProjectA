//  https://rapidapi.com/TekBunny/api/university-data/playground

document.addEventListener("DOMContentLoaded", async function () {
    

    
    console.log("university.js");
    console.log("DOMContentLoaded for university.js-------------");

});
async function university_GetTopNRanking() {
    const options = {
        method: 'GET',
        url: 'https://university-data.p.rapidapi.com/api/v2/rank/5',
        headers: {
          'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
          'x-rapidapi-host': 'university-data.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}

async function university_GetByCountry(countryName) {
    baseURL = 'https://university-data.p.rapidapi.com/api/v2/country/';
    fullURL = `${baseURL}${countryName}`;
    console.log(fullURL);
    const options = {

        method: 'GET',
        url: fullURL,
        headers: {
          'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
          'x-rapidapi-host': 'university-data.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}