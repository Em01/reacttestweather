import React from 'react'
import { shallow } from 'enzyme'

import configureStore from 'redux-mock-store';

import { Weather } from '../Weather'
import { Provider } from 'react-redux';

const mockStore = configureStore({})
const store = mockStore({})

const props = {

}

describe('Weather', () => {
  var component;

  beforeAll(() => {
    component = shallow(<Provider store={store}><Weather {...props}/></Provider>)
  })

  describe('render', () => {
    it('renders', () => {
      console.log(component)
    })
  })
})
