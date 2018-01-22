import { takeEvery, put, call, select } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/utils';
import { getLocation, getCity, getWeather, getCoords } from '../sagas';
import { getLocationData, getReverseGeolocation } from '../../../services/Location';
import { getWeatherData } from '../../../services/Weather';

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
} from '../../../actions/types';

describe('sagas', () => {

  describe('getLocation', () => {
    const locationGen = getLocation();

    it('should call getLocationData', () => {
      expect(locationGen.next().value).toEqual(call(getLocationData));
    });

    it('on success dispatch success action', () => {
      const location = {location: "some location"};

      expect(locationGen.next(location).value)
        .toEqual(put({type: UPDATE_LOCATION, payload: location}));
      });

      it('on fail dispatch fail action', () => {
        const error = new Error('Failed');
        expect(locationGen.throw(error).value)
          .toEqual(put({type: GET_LOCATION_FAILED, payload: error}));
      });
    });

    describe('getCity', () => {
      const cityGen = getCity();

      it('should select getCoords', () => {
        expect(cityGen.next().value).toEqual(select(getCoords));
      });

      it('on success dispatch success action', () => {
        const city = "London";
        cityGen.next();

        expect(cityGen.next(city).value)
          .toEqual(put({type: UPDATE_CITY, payload: city}));
      });

      it('on fail dispatch fail action', () => {
        const error = new Error('Failed');
        expect(cityGen.throw(error).value)
          .toEqual(put({type: GET_CITY_FAILED, payload: error}));
      });
    });

  describe('getWeather', () => {
    const weatherGen = getWeather();

    it('should select getCoords', () => {
      expect(weatherGen.next().value).toEqual(select(getCoords));
    });

    it('on success dispatch success action', () => {
      const weather = "sunny";

      weatherGen.next();
      expect(weatherGen.next(weather).value)
        .toEqual(put({type: UPDATE_WEATHER, payload: weather}));
    });

    it('on fail dispatch fail action', () => {
      const error = new Error('Failed');
      
      expect(weatherGen.throw(error).value)
        .toEqual(put({type: GET_WEATHER_FAILED, payload: error}));
    });
  });
});
