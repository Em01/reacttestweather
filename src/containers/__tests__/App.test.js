import React from 'react'
import { shallow } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps } from '../App'

describe('App', () => {
  const props ={
    locationActions: {
      getLocation: jest.fn()
    }
  }

  var component;

  beforeAll(() => {
    component = shallow(<App {...props}/>);
  });

  describe('when the fetchState is not none', () => {
    beforeAll(() => {
      component.setProps({ weatherFetchState: "SUCCESS" });
    });

    it('has the Weather Component', () => {
      expect(component.find('Connect(Weather)').length).toBe(1);
    });

    it('does not have the Spinner', () => {
      expect(component.find('Spinner').length).toBe(0);
    });
  });

  describe('when the fetchState is none', () => {
    beforeAll(() => {
      component.setProps({ weatherFetchState: 'NONE' });
    });

    it('has the Spinner', () => {
      expect(component.find('Spinner').length).toBe(1);
    });

    it('does not have the Weather Component', () => {
      expect(component.find('Weather').length).toBe(0);
    });
  });
});
