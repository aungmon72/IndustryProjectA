//  https://frankfurter.dev/

//  https://api.frankfurter.dev/v1/latest
//  https://api.frankfurter.dev/v1/latest?base=USD 

//  https://api.frankfurter.dev/v1/latest?symbols=CHF

//  https://api.frankfurter.dev/v1/1999-01-04 */

//  Historical Rates
//  Retrieve rates for a specific past date.
//  https://api.frankfurter.dev/v1/1999-01-04?base=USD&symbols=EUR

//  Time Series Data
//  Fetch rates over a period.
//  https://api.frankfurter.dev/v1/2000-01-01..2000-12-31 

//  Fetch rates up to the present.
//  https://api.frankfurter.dev/v1/2024-01-01

//  Filter currencies to reduce response size and improve performance.
//  https://api.frankfurter.dev/v1/2024-01-01..?symbols=USD

//  Available currencies
//  Get supported currency symbols and their full names.
//  https://api.frankfurter.dev/v1/currencies 

//  Currency Conversion
//  Perform currency conversion by fetching the exchange rate and calculating in your code.
function convert(from, to, amount) {
  fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
    .then((resp) => resp.json())
    .then((data) => {
      const convertedAmount = (amount * data.rates[to]).toFixed(2);
      alert(`${amount} ${from} = ${convertedAmount} ${to}`);
    });
  }

//  convert("EUR", "USD", 10);


async function currency (regionName) {
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