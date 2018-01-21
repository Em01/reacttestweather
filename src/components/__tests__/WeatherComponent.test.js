import React from 'react'
import { shallow } from 'enzyme'

import configureStore from 'redux-mock-store';

import { WeatherComponent } from '../WeatherComponent'
import { Provider } from 'react-redux';

const mockStore = configureStore({})
const store = mockStore({})

const props = {

}

describe('WeatherComponent', () => {
  var component;

  beforeAll(() => {
    component = shallow(<Provider store={store}><WeatherComponent {...props}/></Provider>)
  })

  describe('render', () => {
    it('renders', () => {
      console.log(component)
    })
  })
})
