import {
  GET_LOCATION,
  UPDATE_LOCATION,
  GET_LOCATION_FAILED,
  GET_CITY,
  UPDATE_CITY,
  GET_CITY_FAILED
} from '../actions/types'

const initialState = {
  loadingLocation: false,
  city: '',
  locationData: {},
  error: null,
  locationFetchState: 'NONE',
};

//TODO: Split weather and location into two reducers/actions
const locationReducer = (state=initialState, action) => {

  switch (action.type) {
    case GET_LOCATION:
      return { ...state, loadingLocation: true };

    case UPDATE_LOCATION:
      return { ...state, locationData: action.payload, loadingLocation: false };

    case UPDATE_CITY:
      return { ...state, city: action.payload, loadingCity: false };

    case GET_LOCATION_FAILED:
      return { ...state, error: action.payload, locationFetchState: 'FAILED', loadingLocation: false, };

    case GET_CITY:
      return { ...state, loadingCity: true, };

    case GET_CITY_FAILED:
      return { ...state, error: action.payload, loadingLocation: false };

    default:
      return state;
  }
};

export default locationReducer
