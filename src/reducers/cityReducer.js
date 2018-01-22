import {
  GET_CITY,
  UPDATE_CITY,
  GET_CITY_FAILED
} from '../actions/types'

const initialState = {
  loadingCity: false,
  name: '',
  error: null
};

const cityReducer = (state=initialState, action) => {

  switch (action.type) {
    case GET_CITY:
      return { ...state, loadingCity: true };

    case UPDATE_CITY:
      return { ...state, name: action.payload, loadingCity: false };

    case GET_CITY_FAILED:
      return { ...state, error: action.payload, loading: false, loadingCity: false };

    default:
      return state;
  }
};

export default cityReducer
