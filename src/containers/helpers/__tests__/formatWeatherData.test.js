import _ from 'underscore';
import {
  formatWeatherDescription,
  formatTemperature,
  formatHumidity,
  getMainWeather,
  getUpcomingWeather,
  formatTime
} from '../formatWeatherData';
const item = require('../../__tests__/data/weatherData');
const weatherItem = _.first(item);

describe('formatWeatherDescription', () => {
  it('returns the formatted weather description', () => {
    expect(formatWeatherDescription(weatherItem)).toEqual('Clear sky');
  });
});

describe('formatTemperature', () => {
  it('returns the formatted temperature', () => {
    expect(formatTemperature(weatherItem)).toEqual('38.0');
  });
});

describe('formatHumidity', () => {
  it('returns the formatted humidity', () => {
    expect(formatHumidity(weatherItem)).toEqual(56);
  });
});

describe('getMainWeather', () => {
  it('returns the formatted humidity', () => {
    expect(getMainWeather(item)).toEqual(weatherItem);
  });
});

describe('getUpcomingWeather', () => {
  it('returns the formatted humidity', () => {
    expect(getUpcomingWeather(item).length).toEqual(3);
  });
});

describe('formatTime', () => {
  it('returns the formatted humidity', () => {
    expect(formatTime(0)).toEqual("3");
  });
});
