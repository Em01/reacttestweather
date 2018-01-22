import _ from 'underscore'

export function formatWeatherDescription(item) {
  const description = item.weather[0].description;
  let formatDescription = description.charAt(0).toUpperCase();
  return formatDescription  + description.slice(1);
}

export function formatTemperature(item) {
  return item.main.temp.toFixed(1);
}

export function formatHumidity(item) {
  return item.main.humidity;
}

export function getMainWeather(forecastItems) {
  const item = _.first(forecastItems)
  return item
}

export function getUpcomingWeather(forecastItems) {
  const itemList = forecastItems.slice(1, 4)
  return itemList
}

export function timeText(id) {
  switch(id) {
    case 0:
      return "3"
    case 1:
      return "6"
    case 2:
    return "9"
  }
}
