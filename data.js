const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq32JqRqo6AHKIhCP2yosAeYOhHUDuoLuKTfgsOQmhStCY="

async function search(lat, lng, searchTerms) {
    const response = await axios.get(`${BASE_API_URL}/places/search`, {
        params: {
            query: encodeURI(searchTerms), //encodeURI is used to convert special characters to their encoded eqv so that query will be wellformed
            ll: lat + "," + lng,
            sort: "DISTANCE",
            radius: 5000,
            limit: 50

        },
        headers: {
            Accept: "application/json",
            // Provide the API key here
            Authorization: API_KEY
        }
    })
    return response.data;
}

async function getPhotoFromFourSquare(fsqId) {
    const response = await axios.get(`${BASE_API_URL}/places/${fsqId}/photos`, {
        
        headers: {
            Accept: "application/json",
            Authorization: API_KEY
        }
    });
    return response.data;
}

