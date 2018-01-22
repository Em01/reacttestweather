import {
  GET_WEATHER,
  UPDATE_WEATHER,
  GET_WEATHER_FAILED,
} from '../actions/types'

const initialState = {
  loadedWeather: false,
  weatherData: {},
  error: null,
  weatherFetchState: 'NONE'
};

const weatherReducer = (state=initialState, action) => {

  switch (action.type) {
    case GET_WEATHER:
      return { ...state};

    case UPDATE_WEATHER:
      return { ...state, weatherData: action.payload, loadedWeather: true };

    case GET_WEATHER_FAILED:
      return { ...state, error: action.payload, weatherFetchState: 'FAILED' };

    default:
      return state;
  }
};

export default weatherReducer
