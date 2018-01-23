import React from 'react'
import { shallow } from 'enzyme'
import { Weather, mapStateToProps } from '../Weather'
const weatherData = require('./data/weatherData')
const props = {
  city: "London",
  forecast: weatherData
}

describe('Weather', () => {
  var component;

  beforeAll(() => {
    component = shallow(<Weather {...props}/>);
  });

  describe('render', () => {
    describe('When the fetchState is Failed', () => {

      beforeAll(() => {
        component.setProps({ fetchState: 'FAILED' });
      });

      it('renders the WeatherError component', () => {
        expect(component.find('WeatherError').length).toBe(1);
      });
    });

    describe('When the fetchState is not failed', () => {

      beforeAll(() => {
        component.setProps({ fetchState: 'SUCCESS' })
      });

      it('has the WeatherItem components', () => {
        expect(component.find('WeatherItem').length).toBe(4);
      });

      it('has the upcoming weather text', () => {
        const text = "Coming up..."
        expect(component.find('h2').first().props().children).toBe(text);
      });
    });
  });
});
