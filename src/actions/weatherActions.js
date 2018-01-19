import {
  GET_LOCATION,
  GET_WEATHER,
  GET_WEATHER_FAILED,
  GET_LOCATION_FAILED,
  GET_WEATHER_SUCCESS,
  GET_LOCATION_SUCCESS,
  UPDATE_LOCATION,
  UPDATE_WEATHER
} from './types'

export const getLocation = () => {
  console.log('get location')
    return {
        type: GET_LOCATION,
    }
};

export const getLocationSuccess = (payload) => {
  console.log('get location succ')
    return {
        type: GET_LOCATION_SUCCESS,
        payload
    }
};

export const getWeather = () => {
    return {
        type: GET_WEATHER,
    }
};

export const updateLocation = (payload) => {
    return {
        type: UPDATE_LOCATION,
        payload
    }
};

export const updateWeather = (payload) => {
    return {
        type: UPDATE_WEATHER,
        payload
    }
};

export const getWeatherFailed = (payload) => {
    return {
      type: GET_WEATHER_FAILED,
      payload
    }
};

export const getLocationFailed = (payload) => {
  return {
    type: GET_LOCATION_FAILED,
    payload
  }
}
