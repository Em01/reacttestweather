import {
  GET_LOCATION,
  GET_WEATHER,
  GET_WEATHER_FAILED,
  GET_LOCATION_FAILED,
  UPDATE_LOCATION,
  UPDATE_WEATHER
} from './types'

export const getLocation = () => {
    return {
        type: GET_LOCATION
    }
};

export const getWeather = () => {
    return {
        type: GET_WEATHER
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
};
