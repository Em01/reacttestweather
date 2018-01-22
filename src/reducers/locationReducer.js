import {
  // GET_LOCATION,
  UPDATE_LOCATION,
  GET_LOCATION_FAILED,
  GET_CITY,
  UPDATE_CITY,
  GET_CITY_FAILED
} from '../actions/types'

const initialState = {
  city: '',
  locationData: {},
  error: null,
  locationFetchState: 'NONE',
};

const locationReducer = (state=initialState, action) => {

  switch (action.type) {
    // case GET_LOCATION:
    //   return { ...state };

    case UPDATE_LOCATION:
      return { ...state, locationData: action.payload };

    case UPDATE_CITY:
      return { ...state, city: action.payload };

    case GET_LOCATION_FAILED:
      return { ...state, error: action.payload, locationFetchState: 'FAILED' };

    case GET_CITY:
      return { ...state };

    case GET_CITY_FAILED:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export default locationReducer
