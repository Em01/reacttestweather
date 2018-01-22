import locationReducer from '../locationReducer';
import {
  GET_LOCATION,
  UPDATE_LOCATION,
  GET_LOCATION_FAILED
} from '../../actions/types';

describe('Location Reducer',() => {

  describe('GET_LOCATION', () => {
    const result = locationReducer({}, {
      type: GET_LOCATION
    });

    it('handles getLocation', () => {
      expect(result).toEqual({loadingLocation: true});
    });
  });

  describe('UPDATE_LOCATION', () => {
    const locationData = { lat: 1, lon: 2 };
    const result = locationReducer({}, {
      type: UPDATE_LOCATION,
      payload: locationData
    });

    it('handles updateLocation', () => {
      expect(result).toEqual({loadingLocation: false, locationData: locationData});
    });
  });

  describe('GET_LOCATION_FAILED', () => {
    const error = "An error";
    const result = locationReducer({}, {
      type: GET_LOCATION_FAILED,
      payload: error
    });

    it('handles getLocationFailed', () => {
      expect(result).toEqual({
        loadingLocation: false,
        error: error,
        locationFetchState: 'FAILED'
      });
    });
  });
});
