const API_KEY= 'fsq3DCyzZBweHtzaXQMS4GxCJjkMp3C/2t4h/RFuClewXZM=';

async function searchPlaces(lat, lng, searchTerms, radius=500, limit=50){
     
    // configuration object is used to config axios
     const config = {
         // params are what goes into the query string
         "params": {
             "ll": `${lat},${lng}`,
             "query": searchTerms,
             "radius": radius,
             "limit": limit
         },
         headers: {
             "accept": 'application/json',
             "Authorization": API_KEY
         }
     }

     // const declares a variable but it cannot be reassigned to 
     // the second arg to axios.get is an object configuring the properties of the request
     const response = await axios.get("https://api.foursquare.com/v3/places/search", config);
     return response.data;
}