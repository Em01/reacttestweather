import {
  GET_WEATHER,
  GET_WEATHER_FAILED,
  UPDATE_WEATHER,
} from './types'

export const getWeather = () => {
    return {
        type: GET_WEATHER
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
