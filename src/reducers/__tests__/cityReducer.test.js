import cityReducer from '../cityReducer';
import { GET_CITY, UPDATE_CITY, GET_CITY_FAILED } from '../../actions/types'

describe('City Reducer',() => {

  describe('GET_CITY', () => {
    const result = cityReducer({}, {
      type: GET_CITY
    });

    it('handles getCity', () => {
      expect(result).toEqual({loadingCity: true});
    });
  });

  describe('UPDATE_CITY', () => {
    const city = "London";
    const result = cityReducer({}, {
      type: UPDATE_CITY,
      payload: city
    });

    it('handles updateCity', () => {
      expect(result).toEqual({loadingCity: false, name: city});
    });
  });

  describe('GET_CITY_FAILED', () => {
    const error = "an error";
    const result = cityReducer({}, {
        type: GET_CITY_FAILED,
        payload: error
    });

    it('handles getCityFailed', () => {
      expect(result).toEqual({error: error, loadingCity: false});
    });
  });
});
