import React from 'react'
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme'

import App from '../App'
import { Provider } from 'react-redux';

const mockStore = configureStore({})
const store = mockStore({})


const props = {
  weather: {
    loadedWeather: false
  }
}

describe('App', () => {
  var component;

  beforeAll(() => {
    component = shallow(<Provider store={store}><App {...props}/></Provider>)

  })

  describe('component', () => {

    it('does', () => {
      console.log(component)
    })
  })
})
