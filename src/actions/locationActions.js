import {
  GET_LOCATION,
  GET_LOCATION_FAILED,
  UPDATE_LOCATION,
  GET_CITY,
  UPDATE_CITY,
  GET_CITY_FAILED
} from './types'

export const getCity = () => {
  // console.log(payload, 'p1')
    return {
        type: GET_CITY,
        // payload
    }
};

export const updateCity = (payload) => {
  // console.log(payload, 'p1')
    return {
        type: GET_CITY,
        payload
    }
};

export const getCityFailed = (payload) => {
  console.log(payload, 'p')
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
