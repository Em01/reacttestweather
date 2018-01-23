import React from 'react';
import { shallow } from 'enzyme';
import WeatherItem from '../WeatherItem';

describe('WeatherItem', () => {
  const props = {
    temperature: 10,
    humidity: 90
  }

  var component;

  beforeAll(() => {
    component = shallow(<WeatherItem {...props} />);
  });


  it('has the weather icon', () => {
    expect(component.find('img').length).toBe(1);
  });

  it('has the temperature text', () => {
    const text = "10 Celsius";
    expect(component.find('p').first().props().children).toEqual(text);
  });

  it('has the humidity text', () => {
    const text = "90% Humidity";
    expect(component.find('p').at(1).props().children).toEqual(text);
  });

  describe('showCity', () => {

    describe('when the size is large', () => {
      beforeAll(() => {
        component.setProps({
          city: "London",
          type: "large",
          description: "Some description"
        });
      });

      it('has the city text', () => {
        const text = "London";
        expect(component.find('h1').props().children).toEqual(text);
      });

      it('has the description text', () => {
        const text = "Some description";
        expect(component.find('.description').props().children).toEqual(text);
      });
    });

    describe('when the size is not large', () => {

      beforeAll(() => {
        component.setProps({
          type: "small",
        });
      });

      it('does not have the city text',  () => {
        expect(component.find('h1').length).toBe(0);
      });
    });
  });

  describe('showTime', () => {

    describe('when the size is small', () => {
      beforeAll(() => {
        component.setProps({
          type: "small",
          time: 3
        });
      });

      it('shows the time text', () => {
        const text = "+ 3 Hours";
        expect(component.find('p').first().props().children).toEqual(text);
      });
    });


    describe('when the size is large', () => {
      beforeAll(() => {
        component.setProps({
          type: "large",
        });
      });

      it('shows the time text', () => {
        const text = "+ 3 Hours";
        expect(component.find('p').length).toEqual(2);
      });
    });
  });
});
