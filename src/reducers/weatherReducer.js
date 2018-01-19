import {
  GET_LOCATION,
  GET_WEATHER,
  UPDATE_LOCATION,
  UPDATE_WEATHER,
  GET_WEATHER_FAILED,
  GET_LOCATION_FAILED,
  GET_WEATHER_SUCCESS,
  GET_LOCATION_SUCCESS,
} from '../actions/types'

const initialState = {
  loadingLocation: false,
  loadingWeather: false,
  location: {},
  weather: {},
  error: null,
  weatherFetchState: 'NONE' ,
  locationFetchState: 'NONE',
};

//TODO: Split weather and location into two reducers/actions
const weatherReducer = (state=initialState, action) => {

  switch (action.type) {
    case GET_LOCATION:
      return { ...state, loadingLocation: true };

    case UPDATE_LOCATION:
      return { ...state, location: action.payload, loadingLocation: false };

    case GET_WEATHER:
      return { ...state, loadingWeather: true };

    case UPDATE_WEATHER:
      return { ...state, weather: action.payload, loadingWeather: false, };

    case GET_WEATHER_FAILED:
      return { ...state, error: action.payload, weatherFetchState: 'FAILED', loadingWeather: false, };

    case GET_LOCATION_FAILED:
      return { ...state, error: action.payload, locationFetchState: 'FAILED', loadingLocation: false, };

    case GET_WEATHER_SUCCESS:
      return { ...state, weatherFetchState: 'SUCCESS', loadingWeather: false, };

    case GET_LOCATION_SUCCESS:
      return { ...state, location: action.payload, locationFetchState: 'SUCCESS', loadingLocation: false, };



    default:
      return state;
  }
}

export default weatherReducer
