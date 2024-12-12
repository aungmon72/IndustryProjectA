async function searchPlaces(searchTerms){
     
    // configuration object is used to config axios
     const config = {
         // params are what goes into the query string
         "params": {
             "ll": "1.2761,103.8458",
             "query": searchTerms,
             "radius": 500,
             "limit": 50
         },
         headers: {
             "accept": 'application/json',
             "Authorization": 'fsq3DCyzZBweHtzaXQMS4GxCJjkMp3C/2t4h/RFuClewXZM='
         }
     }

     // const declares a variable but it cannot be reassigned to 
     // the second arg to axios.get is an object configuring the properties of the request
     const response = await axios.get("https://api.foursquare.com/v3/places/search", config);
     return response.data;
}