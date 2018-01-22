import _ from 'underscore';
var ReactDOM = require('react-dom');

export function getLocationData() {
  return new Promise((resolve, reject) => {
    navigator.geolocation && navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export function getReverseGeolocation(coords) {
  console.log(coords)
  var latlng = {
    lat: coords.latitude,
    lng: coords.longitude
  }

  var geocoder = new window.google.maps.Geocoder()
  return new Promise(function(resolve, reject) {

    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
      if (status == window.google.maps.GeocoderStatus.OK) {
        const address = results.length >= 4 ? results[4].formatted_address : _.first(results).formatted_address
        resolve(address)
      } else {
        reject('could not geocode '+status)
      }
    })
  })
}
