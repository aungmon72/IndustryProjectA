document.addEventListener("DOMContentLoaded", async function () {
    

    console.log("devices.js");
    console.log("DOMContentLoaded for devices.js-------------");

});

async function getDevicesByName_GSMArenaParser() {
    const options = {
        method: 'GET',
        // url: 'https://gsmarenaparser.p.rapidapi.com/api/values/getdevices/manufacturer',
        url: 'https://gsmarenaparser.p.rapidapi.com/api/values/getdevices/%7Bmanufacturer%7D',
        headers: {
            'x-rapidapi-key': '4593ec32d4msh36d3bc8cb2c0060p1c6257jsn2bbcee686296',
            'x-rapidapi-host': 'gsmarenaparser.p.rapidapi.com'
        }
    };
    console.log("In getDevicesByName_GSMArenaParser")
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}  //  async function getDevicesByName_GSMArenaParser() {
  