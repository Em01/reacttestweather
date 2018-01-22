import weatherReducer from '../weatherReducer';
import {
  GET_WEATHER,
  UPDATE_WEATHER,
  GET_WEATHER_FAILED,
} from '../../actions/types';

describe('Weather Reducer',() => {

  describe('GET_WEATHER', () => {
    const result = weatherReducer({}, {
      type: GET_WEATHER
    });

    it('handles getWeather', () => {
      expect(result).toEqual({loadingWeather: true});
    });
  });

  describe('UPDATE_WEATHER', () => {
    const weatherData = {
      forecast: "sunny"
    };
    const result = weatherReducer({}, {type: UPDATE_WEATHER, payload: weatherData})

    it('handles updateWeather', () => {
      expect(result).toEqual({
        loadingWeather: false,
        weatherData: weatherData,
        loadedWeather: true
      });
    });
  });

  describe('GET_WEATHER_FAILED', () => {
    const error= "An error";
    const result = weatherReducer({}, {
      type: GET_WEATHER_FAILED,
      payload: error
    });

    it('handles updateCity', () => {
      expect(result).toEqual({
        error: error,
        weatherFetchState: 'FAILED',
        loadingWeather: false
      });
    });
  });
});
