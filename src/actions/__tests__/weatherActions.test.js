import * as actions from '../weatherActions';
import * as types from '../types';

describe('Weather Action Creator', () => {

  describe('getWeather', () => {
    it('creates an action to getCity', () => {
      const expectedAction = {
        type: types.GET_WEATHER
      }
      expect(actions.getWeather()).toEqual(expectedAction);
    });
  });

  describe('updateWeather', () => {
    it('creates an action to updateCity', () => {
      const weatherData = {
        forecast: "sunny"
      }
      const expectedAction = {
        type: types.UPDATE_WEATHER,
        payload: weatherData
      }
      expect(actions.updateWeather(weatherData)).toEqual(expectedAction);
    });
  });

  describe('getWeatherFailed', () => {
    it('creates an action for getCityFailed', () => {
      const error = "error text";
      const expectedAction = {
        type: types.GET_WEATHER_FAILED,
        payload: error
      }
      expect(actions.getWeatherFailed(error)).toEqual(expectedAction);
    });
  });
});
