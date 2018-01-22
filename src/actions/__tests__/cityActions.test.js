import * as actions from '../cityActions';
import * as types from '../types';

describe('City Action Creator', () => {

  describe('getCity', () => {
    it('creates an action to getCity', () => {
      const expectedAction = {
        type: types.GET_CITY
      }
      expect(actions.getCity()).toEqual(expectedAction);
    });
  });

  describe('updateCity', () => {
    it('creates an action to updateCity', () => {
      const city = "London";
      const expectedAction = {
        type: types.UPDATE_CITY,
        payload: city
      }
      expect(actions.updateCity(city)).toEqual(expectedAction);
    });
  })

  describe('getCityFailed', () => {
    it('creates an action for getCityFailed', () => {
      const error = "error text";
      const expectedAction = {
        type: types.UPDATE_CITY,
        payload: error
      }
      expect(actions.updateCity(error)).toEqual(expectedAction);
    });
  });
});
