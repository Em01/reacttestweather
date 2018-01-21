import * as actions from '../locationActions'
import * as types from '../types'

describe('Location Action Creator', () => {

  describe('getCity', () => {
    it('creates an action to getCity', () => {
      const expectedAction = {
        type: types.GET_CITY
      }
      expect(actions.getCity()).toEqual(expectedAction)
    })
  })

  describe('updateCity', () => {
    it('creates an action to updateCity', () => {
      const city = "London"
      const expectedAction = {
        type: types.UPDATE_CITY,
        payload: city
      }
      expect(actions.updateCity(city)).toEqual(expectedAction)
    })
  })

  describe('getCityFailed', () => {
    it('creates an action for getCityFailed', () => {
      const error = "error text"
      const expectedAction = {
        type: types.UPDATE_CITY,
        payload: error
      }

      expect(actions.updateCity(error)).toEqual(expectedAction)
    })
  })

  describe('getLocation', () => {
    it('creates an action for getLocation', () => {
      const expectedAction = {
        type: types.GET_LOCATION
      }
      expect(actions.getLocation()).toEqual(expectedAction)
    })
  })

  describe('updateLocation', () => {
    it('creates an action to updateLocation', () => {
      const locationData = {
        lat: 1,
        lon: 2
      }
      const expectedAction = {
        type: types.UPDATE_LOCATION,
        payload: locationData
      }
      expect(actions.updateLocation(locationData)).toEqual(expectedAction)
    })
  })

  describe('getLocationFailed', () => {
    it('creates an action for getLocationFailed', () => {
      const error = "error text"
      const expectedAction = {
        type: types.GET_LOCATION_FAILED,
        payload: error
      }

      expect(actions.getLocationFailed(error)).toEqual(expectedAction)
    })
  })
})
