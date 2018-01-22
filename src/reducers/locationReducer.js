import {
  GET_LOCATION,
  UPDATE_LOCATION,
  GET_LOCATION_FAILED
} from '../actions/types'

const initialState = {
  loadingLocation: false,
  locationData: {},
  error: null,
  locationFetchState: 'NONE',
};

const locationReducer = (state=initialState, action) => {

  switch (action.type) {
    case GET_LOCATION:
      return { ...state, loadingLocation: true };

    case UPDATE_LOCATION:
      return { ...state, locationData: action.payload, loadingLocation: false };

    case GET_LOCATION_FAILED:
      return { ...state, error: action.payload, locationFetchState: 'FAILED', loadingLocation: false };

    default:
      return state;
  }
};

export default locationReducer
