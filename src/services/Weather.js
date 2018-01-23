// const API_KEY = '18d2c3875ea7b407326315ecfe83bdf2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/`;
const API_KEY = '8925a7dc5ee1e28fc4a5d9e74b086ed8';

export function getWeatherData(coords) {
  const lat = coords.latitude;
  const lon = coords.longitude;
  const urlDetails = `forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  var weatherAPIUrl = ROOT_URL + urlDetails;

  return fetch(weatherAPIUrl)
    .then(checkStatusErrors)
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
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
