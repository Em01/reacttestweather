import { takeEvery, put, call, select } from 'redux-saga/effects';
import * as weatherActions from '../../actions/weatherActions';
import * as locationActions from '../../actions/locationActions';

import {
  GET_LOCATION,
  GET_WEATHER,
  GET_WEATHER_FAILED,
  GET_LOCATION_FAILED,
  UPDATE_LOCATION,
  UPDATE_WEATHER
} from '../../actions/types';

import { getWeatherData } from '../../services/Weather';
import { getLocationData } from '../../services/Location';

function *getLocation(action) {
    try {
      const location = yield call(getLocationData);
      yield put({type: UPDATE_LOCATION, payload: location});
    } catch(error) {
      yield put({type: GET_LOCATION_FAILED, payload: error});
    }
    yield* getWeather(locationActions.getLocation());
}

function *getWeather(action) {
  const getCoords = state => state.location.locationData.coords;
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
}


export default weatherSaga
