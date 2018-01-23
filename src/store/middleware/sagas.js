import { takeEvery, put, call, select } from 'redux-saga/effects';
import * as locationActions from '../../actions/locationActions';

import {
  GET_LOCATION,
  GET_WEATHER,
  GET_WEATHER_FAILED,
  GET_LOCATION_FAILED,
  UPDATE_LOCATION,
  UPDATE_WEATHER,
  UPDATE_CITY,
  GET_CITY,
  GET_CITY_FAILED
} from '../../actions/types';

import { getWeatherData } from '../../services/Weather';
import { getLocationData } from '../../services/Location';
import { getReverseGeolocation } from '../../services/Location';

export const getCoords = state => state.location.locationData.coords;

export function *getLocation(action) {
  try {
    const location = yield call(getLocationData);
    yield put({type: UPDATE_LOCATION, payload: location});
  } catch(error) {
    yield put({type: GET_LOCATION_FAILED, payload: error});
  }
  yield* getCity(locationActions.getLocation());
}

export function *getCity(action) {
  const coords = yield select(getCoords);
  try {
    const city = yield call(getReverseGeolocation, coords);
    yield put({type: UPDATE_CITY, payload: city});
  } catch(error) {
    yield put({type: GET_CITY_FAILED, payload: error});
  }
  yield* getWeather(locationActions.getLocation());
}

export function *getWeather(action) {
  const coords = yield select(getCoords);
  try {
    const weather = yield call(getWeatherData, coords);
    yield put({type: UPDATE_WEATHER, payload: weather});
  } catch(error) {
    yield put({type: GET_WEATHER_FAILED, payload: error});
  }
}

function *weatherSaga() {
  yield takeEvery(GET_LOCATION, getLocation);
  yield takeEvery(GET_WEATHER, getWeather);
  yield takeEvery(GET_CITY, getCity);
}


export default weatherSaga;
