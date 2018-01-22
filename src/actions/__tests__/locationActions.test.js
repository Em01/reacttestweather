import * as actions from '../locationActions';
import * as types from '../types';

describe('Location Action Creator', () => {

  describe('getLocation', () => {
    it('creates an action for getLocation', () => {
      const expectedAction = {
        type: types.GET_LOCATION
      }
      expect(actions.getLocation()).toEqual(expectedAction);
    });
  });

  describe('updateLocation', () => {
    it('creates an action to updateLocation', () => {
      const locationData = {
        lat: 1,
        lon: 2
      };
      const expectedAction = {
        type: types.UPDATE_LOCATION,
        payload: locationData
      }
      expect(actions.updateLocation(locationData)).toEqual(expectedAction);
    })
  })

  describe('getLocationFailed', () => {
    it('creates an action for getLocationFailed', () => {
      const error = "error text";
      const expectedAction = {
        type: types.GET_LOCATION_FAILED,
        payload: error
      }
      expect(actions.getLocationFailed(error)).toEqual(expectedAction);
    });
  });
});
