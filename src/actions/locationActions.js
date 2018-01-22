import {
  GET_LOCATION,
  GET_LOCATION_FAILED,
  UPDATE_LOCATION
} from './types';

export const getLocation = () => {
  return {
    type: GET_LOCATION
  }
};

export const updateLocation = (payload) => {
  return {
    type: UPDATE_LOCATION,
    payload
  }
};

export const getLocationFailed = (payload) => {
  return {
    type: GET_LOCATION_FAILED,
    payload
  }
};
