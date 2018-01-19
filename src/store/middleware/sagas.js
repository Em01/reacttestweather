import { takeEvery, put, call, select } from 'redux-saga/effects';
import * as weatherActions from '../../actions/weatherActions';
import {
  GET_LOCATION,
  GET_WEATHER,
  GET_WEATHER_FAILED,
  GET_LOCATION_FAILED,
  GET_WEATHER_SUCCESS,
  GET_LOCATION_SUCCESS,
  UPDATE_LOCATION,
  UPDATE_WEATHER
} from '../../actions/types';

import { getWeatherData } from '../../services/Location'
import { getLocationData } from '../../services/Location'

function *getLocation(action) {
  console.log('get location')
    // TODO fetch location, then update state
    try {
    //step 1
      const location = yield call(getLocationData);

    //step 2
      yield put({type: GET_LOCATION_SUCCESS, payload: location})
    } catch(error) {
      yield put({type: GET_LOCATION_FAILED, payload: error})
    }
}

function *getWeather(action) {
    // TODO fetch weather based on location in state, then update state

}

function *weatherSaga() {
    yield takeEvery(GET_LOCATION, getLocation);
    yield takeEvery('GET_WEATHER', getWeather);
}


export default weatherSaga
