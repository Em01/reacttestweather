import locationReducer from '../locationReducer'

import {
  GET_LOCATION,
  UPDATE_LOCATION,
  GET_LOCATION_FAILED,
  GET_CITY,
  UPDATE_CITY,
  GET_CITY_FAILED
} from '../../actions/types'
const state = {}

describe('Location Reducer',() => {
  describe('GET_LOCATION', () => {

    const result = locationReducer({}, {
      type: GET_LOCATION
    })

    it('handles getLocation', () => {
      expect(result).toEqual({loadingLocation: true})
    })
  })

  describe('UPDATE_LOCATION', () => {
    const locationData = {
      lat: 1,
      lon: 2
    }

    const result = locationReducer({}, {type: UPDATE_LOCATION, payload: locationData})

    it('handles updateLocation', () => {
      expect(result).toEqual({loadingLocation: false, locationData: locationData})
    })
  })


  describe('UPDATE_CITY', () => {
    const city = "London"

    const result = locationReducer({}, {
      type: UPDATE_CITY,
      payload: city
    })

    it('handles updateCity', () => {
      expect(result).toEqual({loadingCity: false, city: city})
    })
  })

  describe('GET_LOCATION_FAILED', () => {
    const error = "An error"

    const result = locationReducer({}, {
      type: GET_LOCATION_FAILED,
      payload: error
    })

    it('handles getLocationFailed', () => {
      expect(result).toEqual({loadingLocation: false, error: error, locationFetchState: 'FAILED'})
    })
  })

  describe('GET_CITY', () => {

    const result = locationReducer({}, {
      type: GET_CITY
    })

    it('handles getCity', () => {
      expect(result).toEqual({loadingCity: true})
    })
  })

  describe('GET_CITY_FAILED', () => {
    const error = "an error"
    const result = locationReducer({}, {
        type: GET_CITY_FAILED,
        payload: error
    })

    it('handles getCityFailed', () => {
      expect(result).toEqual({error: error, loadingLocation: false})
    })
  })
})
