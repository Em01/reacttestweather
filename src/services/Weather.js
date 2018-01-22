// const API_KEY = '18d2c3875ea7b407326315ecfe83bdf2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/`;
const API_KEY = `8925a7dc5ee1e28fc4a5d9e74b086ed8`;

export function getWeatherData(coords) {


  const lat = coords.latitude;
  const lon = coords.longitude;
  var weatherAPIUrl = ROOT_URL + `forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  return fetch(weatherAPIUrl)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson,'rj')
    return responseJson;
  })
  .catch((error) => {
    console.log(error);
  });
}
