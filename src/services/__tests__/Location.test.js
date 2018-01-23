import { getLocationData, getReverseGeolocation } from '../Location';

const mockGeolocation = {
  getCurrentPosition: jest.fn(() => ({
    coords: {
      latitude: 41.486201,
      longitude: 2.0378555
    }
  }))
};

const coords = {
  latitude: 135678,
  longitude: 45677897,
};

global.navigator = {};
global.google = {};
global.navigator.geolocation = mockGeolocation;

describe('Location', () => {
  describe('getLocationData', () => {
    it('does something', () => {
      getLocationData();
      expect(navigator.geolocation.getCurrentPosition).toBeCalled();
    });
  });

  it('has the formatted address on success', async () => {
    const results = [{formatted_address: "an address"}];
    const dummyResponse = "OK";
    const address = "an address";

    global.google.maps = {
      GeocoderStatus: {OK: "OK"},
      Geocoder: jest.fn(function () {
        return {
          geocode: jest.fn((input, cb) => {
            cb(results, dummyResponse);
          })
        }
      })
    };
    let result = await getReverseGeolocation(coords);
    expect(result).toEqual(address);
  });
});
