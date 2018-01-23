import React from 'react';
import { shallow } from 'enzyme';
import WeatherError from '../WeatherError';

describe('WeatherError', () => {
  var component;

  beforeAll(() => {
    component = shallow(<WeatherError />);
  });

  it('has the error image', () => {
    expect(component.find('img').length).toBe(1);
  });

  it('has the reload text', () => {
    const text = "Something went wrong, Please reload and try again.";
    expect(component.find('h2').props().children).toEqual(text);
  });
});
