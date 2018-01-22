import {
  GET_CITY,
  UPDATE_CITY,
  GET_CITY_FAILED
} from './types';

export const getCity = () => {
  return {
    type: GET_CITY
  }
};

export const updateCity = (payload) => {
  return {
    type: UPDATE_CITY,
    payload
  }
};

export const getCityFailed = (payload) => {
  return {
    type: GET_CITY_FAILED,
    payload
  }
};
