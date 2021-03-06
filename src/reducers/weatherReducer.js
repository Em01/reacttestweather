import {
  GET_WEATHER,
  UPDATE_WEATHER,
  GET_WEATHER_FAILED,
} from '../actions/types'

const initialState = {
  loadingWeather: false,
  weatherData: {},
  error: null,
  weatherFetchState: 'NONE'
};

const weatherReducer = (state=initialState, action) => {

  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        loadingWeather: true
       };

    case UPDATE_WEATHER:
      return {
        ...state,
        weatherData: action.payload,
        weatherFetchState: 'SUCCESS',
        loadingWeather: false
      };

    case GET_WEATHER_FAILED:
      return {
        ...state,
        error: action.payload,
        weatherFetchState: 'FAILED',
        loadingWeather: false
      };

    default:
      return state;
  }
};

export default weatherReducer;
