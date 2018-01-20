// const API_KEY = '18d2c3875ea7b407326315ecfe83bdf2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?`;
const API_KEY = `8925a7dc5ee1e28fc4a5d9e74b086ed8`;

export function getWeatherData(coords) {
  console.log(coords, 'gwd')
  const lat = coords.latitude;
  const lon = coords.longitude;
  var weatherAPIUrl = ROOT_URL + `lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  return fetch(weatherAPIUrl)
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson;
  })
  .catch((error) => {
    console.log(error);
  });
}
