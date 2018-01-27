// const API_KEY = '18d2c3875ea7b407326315ecfe83bdf2';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/`;
// const API_KEY = '8925a7dc5ee1e28fc4a5d9e74b086ed8';


const NOAA_API_KEY = 'pvthuWvcNNaZKxOXuhbGsKoVNRSTjneo'
const URL_ROOT = 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=MARINE&locationid=ZIP:94404&startdate=2007-01-01&enddate=2007-12-30'


var myHeaders = new Headers();

var myInit = { method: 'GET',
              headers: new Headers({
                'token': NOAA_API_KEY
              }),
               mode: 'cors',
               cache: 'default' };

export function getWeatherData(coords) {
  const lat = coords.latitude;
  const lon = coords.longitude;

  var weatherAPIUrl = URL_ROOT;
  console.log('get weather data')

  return fetch(URL_ROOT, myInit)
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(JSON.stringify(data))
        // console.log(data, 'data')
    })
    .catch((error) => {
      console.log(error, 'error')
      return new Error("Error fetching weather data");
    });
}

export function checkStatusErrors(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
  const error = new Error("Error fetching weather data");
  throw error;
}
