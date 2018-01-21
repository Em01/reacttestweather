import {
  GET_LOCATION,
  GET_LOCATION_FAILED,
  UPDATE_LOCATION,
  GET_CITY,
  UPDATE_CITY,
  GET_CITY_FAILED
} from './types'

export const getCity = () => {
    return {
        type: GET_CITY
    }
};

export const updateCity = (payload) => {
    return {
        type: UPDATE_CITY,
        // type: GET_CITY,
        payload
    }
};

export const getCityFailed = (payload) => {
    return {
        type: GET_CITY_FAILED,
        payload
    }
};
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
