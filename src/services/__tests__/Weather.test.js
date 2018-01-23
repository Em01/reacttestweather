import { getWeatherData } from '../Weather';
import fakeWeatherData from '../../../jest/data/weather_data';

describe('getWeatherData', () => {
  const coords = { lat: 1, lon: 2 }

  describe('on fetch success ', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json() { return fakeWeatherData }
      }));
    })
    it('should return the weather data', async () => {
      const weatherData = await getWeatherData(coords);
      expect(weatherData.length).toBe(5);
    });
  });

  describe('when fetch response is not ok', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));
    })
    it('should return the fetching weather error', async () => {
      const errorMessage = Error('Error fetching weather data');
      const weatherData = await getWeatherData(coords);
      expect(weatherData).toEqual(errorMessage);
    });
  });


  describe('when fetch fails', () => {
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
          status: 500
        })
      );
    })
    it('should return the fetching weather error', async () => {
      const errorMessage = Error('Error fetching weather data');
      const weatherData = await getWeatherData(coords);
      expect(weatherData).toEqual(errorMessage);
    });
  });
});
