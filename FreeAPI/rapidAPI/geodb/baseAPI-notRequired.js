
  
const BASE_API_URL = "http://geodb-free-service.wirefreethought.com/v1/geo/places";
const API_KEY = "fsq32JqRqo6AHKIhCP2yosAeYOhHUDuoLuKTfgsOQmhStCY="

const searchTerms = "offset=0&limit=10";


async function search(searchTerms) {
    const response = await axios.get(`${BASE_API_URL}`, {
        params: {
            query: encodeURI(searchTerms),
        },
        headers: {
            Accept: "application/json",
            // Provide the API key here
            // Authorization: API_KEY
        }
    })
    return response.data;
}

async function displaySearchResult(searchTerms, searchResult) {
    const searchResult = document.querySelector(searchResult);
    searchResult.innerHTML = search(searchTerms);
    console.log(searchResult);

}

