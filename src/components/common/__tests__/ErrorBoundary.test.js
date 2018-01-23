import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../ErrorBoundary';

describe('ErrorBoundary', () => {
  var component;

  beforeAll(() => {
    component = shallow(<ErrorBoundary />);
  });

  describe('when state hasError is true', () => {

    beforeAll(() => {
      component.setState({ hasError: true });
    });

    it('has the WeatherError', () => {
      expect(component.find('WeatherError').length).toBe(1);
    });
  });

  describe('when state hasError is false', () => {

    beforeAll(() => {
      component.setState({ hasError: false });
    });

    it('does not have the WeatherError', () => {
      expect(component.find('WeatherError').length).toBe(0);
    });
  });
});
