import { takeEvery, put, call, select } from 'redux-saga/effects';
import * as weatherActions from '../../actions/weatherActions';


function *getLocation(action) {
    // TODO fetch location, then update state
}

function *getWeather(action) {
    // TODO fetch weather based on location in state, then update state
}

function *weatherSaga() {
    yield takeEvery('GET_LOCATION', getLocation);
    yield takeEvery('GET_WEATHER', getWeather);
}

export default weatherSaga;
