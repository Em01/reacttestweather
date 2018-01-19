const API_KEY = '18d2c3875ea7b407326315ecfe83bdf2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?`;

export function getWeatherData(coords) {
  const lat = coords.latitude;
  const lon = coords.longitude;
  var weatherAPIUrl = ROOT_URL + `lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  return fetch(weatherAPIUrl)
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.log(error);
  });
}
